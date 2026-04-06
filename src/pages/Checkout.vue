<script setup>
import { useUser } from "@/composables/useUser";
import Logo from "@/ui/Logo.vue";
import { Icon } from "@iconify/vue";
import { getFirstLetter } from "@/utils/helpers";
import PaymentForm from "@/ui/PaymentForm.vue";
import useCheckout from "@/composables/useCheckout";
import useCart from "@/composables/useCart";
import { ref } from "vue";
import { formatCurrency } from "@/utils/helpers";

const { cartLength, cartData, totalAmt } = useCart();

const emailNews = ref(false);

// const shippingAddress = ref("");

const { isCheckingOut, checkout } = useCheckout();
const { user, isFetchingUser } = useUser();

function handleCheckout(paymentData) {
  console.log(paymentData);

  // Store additional order data for the success page
  const orderData = {
    shippingInfo: {
      firstName: paymentData.firstName || "",
      lastName: paymentData.lastName || "",
      address: paymentData.shipping_address || "",
      apartment: paymentData.apartment || "",
      city: paymentData.city || "",
      stateCode: paymentData.stateCode || "",
      postalCode: paymentData.postalCode || "",
      country: paymentData.country || "Nigeria",
    },
    billingAddress: paymentData.billing_address || "",
    paymentMethod: paymentData.payment_method || "card",
    lastFourDigits: paymentData.cardLastFour || "1234",
    useShippingAsBilling: paymentData.useShippingAsBilling !== false,
  };

  // Store in localStorage to be picked up by useCheckout
  localStorage.setItem("checkoutFormData", JSON.stringify(orderData));

  checkout({
    payment_method: paymentData.payment_method,
    billing_address: paymentData.billing_address,
    shipping_address: paymentData.shipping_address,
  });
}
</script>

<template>
  <header class="border-b border-b-neutral-border2">
    <nav
      class="mx-auto flex w-full max-w-container items-center justify-between px-5 py-5.25 lg:px-0"
    >
      <RouterLink :to="{ name: 'home' }">
        <Logo />
      </RouterLink>
      <RouterLink :to="{ name: 'cart' }" class="group relative flex flex-col items-center">
        <span
          class="absolute translate-y-6 rounded bg-black px-1 py-0.5 text-xs text-white opacity-0 transition-all duration-500 group-hover:-translate-y-5 group-hover:opacity-100"
          >Cart</span
        >
        <Icon icon="solar:cart-outline" class="text-2xl" />
      </RouterLink>
    </nav>
  </header>

  <!-- fetching User data -->
  <div v-if="isFetchingUser">
    <div class="mx-auto h-10 w-32 animate-pulse rounded bg-neutral-200" />
  </div>

  <!-- Has items in cart -->
  <main v-else class="min-h[calc(100vh-78px)] grid grid-cols-1 text-black lg:grid-cols-2">
    <!-- Left -->
    <!-- <div class="overflow-yauto"> -->
    <section class="flex justify-end border-r border-r-neutral-border2">
      <!-- Left container -->
      <div class="h-full w-full max-w-145 p-[3.8rem]">
        <!-- Email -->
        <div>
          <div class="mb-3.5 border-b border-b-neutral-border2 pb-3.5">
            <div class="flex items-center gap-2">
              <!-- "Icon" -->
              <div class="flex size-8 items-center justify-center rounded-full bg-[#fafafa]">
                <span class="text-xs">{{ getFirstLetter(user.name) }}</span>
              </div>
              <!-- email -->
              <p class="text-sm">{{ user.email }}</p>
            </div>
          </div>

          <!-- check -->
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              id="emailNews"
              v-model="emailNews"
              class="size-5 border border-[#dedede] accent-black"
            />
            <label for="emailNews" class="cursor-pointer text-sm"
              >Email me with news and offers</label
            >
          </div>
        </div>

        <!-- Payment -->
        <PaymentForm
          :isLoading="isCheckingOut"
          :isEmptyCart="cartLength <= 0"
          @checkout="handleCheckout"
        />
      </div>
    </section>
    <!-- </div> -->
    <!-- Right -->
    <!-- <div class="sticky right-0"> -->
    <section class="sticky top-0 bg-[#fafafa]">
      <!-- Empty cart -->
      <div
        v-if="cartLength <= 0"
        class="mx-auto mt-8 flex w-full max-w-145 flex-col items-center px-5 text-center text-xl md:px-0"
      >
        <p>Your cart is currently empty, you have nothing to checkout.</p>
        <p>
          Browse our
          <RouterLink to="/collections/all" class="text-brand-primary underline"
            >products</RouterLink
          >
          to add items to your cart.
        </p>
      </div>

      <section v-else class="max-w-122 p-9.5 text-sm">
        <!-- Cart items -->
        <ul class="max-h-74 space-y-5 overflow-y-auto">
          <li
            v-for="item in cartData"
            :key="item.id"
            class="flex items-center justify-between first-of-type:pt-4"
          >
            <!-- Image -->
            <div class="flex items-center gap-3">
              <div
                class="relative min-h-px shrink-0 basis-20 rounded-lg border-2 border-white bg-[#f5f5f5] pt-[20%]"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="absolute top-1/2 left-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 scale-110 object-contain transition-all duration-500 hover:scale-105"
                />

                <!-- Quantity -->
                <p
                  class="absolute -top-2 -right-2 z-50 rounded-lg border-2 border-white bg-black px-1.5 text-xs text-white"
                >
                  {{ item.quantity }}
                </p>
              </div>
              <p>{{ item.name }}</p>
            </div>

            <!-- Price -->
            <p>{{ formatCurrency(item.price) }}</p>
          </li>
        </ul>

        <!-- Totals -->
        <div class="mt-10 flex items-center justify-between text-lg">
          <span class="font-semibold">Total:</span>
          <span class="font-semibold">
            <span class="mr-2 text-xs text-black/50">USD</span>
            <span>{{ formatCurrency(totalAmt) }}</span>
          </span>
        </div>
      </section>
    </section>
    <!-- </div> -->
  </main>
</template>

<style lang="scss" scoped></style>
