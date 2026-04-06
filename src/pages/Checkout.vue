<script setup>
import { useUser } from "@/composables/useUser";
import Logo from "@/ui/Logo.vue";
import { Icon } from "@iconify/vue";
import { getFirstLetter } from "@/utils/helpers";
// import DeliveryForm from "@/ui/DeliveryForm.vue";
import PaymentForm from "@/ui/PaymentForm.vue";
import useCheckout from "@/composables/useCheckout";
import useCart from "@/composables/useCart";
import { ref } from "vue";

const { cartLength, cartData, totalAmt, deleteFromCart, deletingId } = useCart();

const emailNews = ref(false);

const shippingAddress = ref("");

const { isCheckingOut, checkout } = useCheckout();
const { user, isFetchingUser } = useUser();

function handleCheckout(paymentData) {
  checkout({
    payment_method: paymentData.payment_method,
    billing_address: paymentData.billing_address,
    shipping_address: shippingAddress.value,
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
  <main v-else class="grid min-h-[calc(100vh-78px)] grid-cols-1 text-black lg:grid-cols-2">
    <!-- Left -->
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

        <!-- Delivery -->
        <!-- <div class="mt-8">
          <DeliveryForm @update:shipping="shippingAddress = $event" />
        </div> -->

        <!-- Payment -->
        <PaymentForm
          :shippingAddress="shippingAddress"
          :isLoading="isCheckingOut"
          :isEmptyCart="cartLength <= 0"
          @checkout="handleCheckout"
        />
      </div>
    </section>
    <!-- Right -->
    <!-- Empty cart -->
    <div
      v-if="cartLength <= 0"
      class="mx-auto mt-8 flex w-full max-w-145 flex-col items-center px-5 text-center text-xl md:px-0"
    >
      <p>Your cart is currently empty, you have nothing to checkout.</p>
      <p>
        Browse our
        <RouterLink to="/collections/all" class="text-brand-primary underline">products</RouterLink>
        to add items to your cart.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
