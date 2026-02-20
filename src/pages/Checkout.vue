<script setup>
import { useUser } from "@/composables/useUser";
import Logo from "@/ui/Logo.vue";
import { Icon } from "@iconify/vue";
import { getFirstLetter } from "@/utils/helpers";
import { ref } from "vue";
import DeliveryForm from "@/ui/DeliveryForm.vue";
import PaymentForm from "@/ui/PaymentForm.vue";
import toast from "vue3-hot-toast";
import api from "@/services/axios";
import { useRouter } from "vue-router";
import useCheckout from "@/composables/useCheckout";

const router = useRouter();
const { user, isFetchingUser } = useUser();

const emailNews = ref(false);

const shippingAddress = ref("");

// const isLoading = ref(false);

const { isCheckingOut, checkout } = useCheckout();

function handleCheckout(paymentData) {
  checkout({
    payment_method: paymentData.payment_method,
    billing_address: paymentData.billing_address,
    shipping_address: shippingAddress.value,
  });
}

// async function handleCheckout(paymentData) {
//   try {
//     isLoading.value = true;

//     const payload = {
//       payment_method: paymentData.payment_method,
//       shipping_address: shippingAddress.value,
//       billing_address: paymentData.billing_address,
//     };

//     const res = await api.post("/orders/checkout", payload);
//     toast.success(res.data.message || "Checkout successful");

//     setTimeout(() => {
//       router.push({ name: "home" });
//     }, 1500);
//     return res.data;
//   } catch (err) {
//     toast.error(err.message || "Checkout failed");
//   } finally {
//     isLoading.value = false;
//   }
// }
</script>

<template>
  <header class="border-b border-b-neutral-border2">
    <nav class="mx-auto flex w-full max-w-container items-center justify-between py-5.25">
      <RouterLink :to="{ name: 'home' }">
        <Logo />
      </RouterLink>
      <RouterLink :to="{ name: 'cart' }">
        <Icon icon="solar:cart-outline" class="text-2xl" />
      </RouterLink>
    </nav>
  </header>

  <div v-if="isFetchingUser">
    <div class="mx-auto h-10 w-32 animate-pulse rounded bg-neutral-200" />
  </div>
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
        <div class="mt-8">
          <DeliveryForm @update:shipping="shippingAddress = $event" />
        </div>

        <!-- Payment -->
        <PaymentForm
          :shippingAddress="shippingAddress"
          :isLoading="isCheckingOut"
          @checkout="handleCheckout"
        />
      </div>
    </section>
    <!-- Right -->
    <section class="bg-[#fafafa]">Test</section>
  </main>
</template>

<style lang="scss" scoped></style>
