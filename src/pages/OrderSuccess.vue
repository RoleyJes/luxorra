<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="border-b border-b-neutral-border2 bg-white">
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

    <!-- Success Content -->
    <div class="mx-auto max-w-4xl px-4 py-8">
      <!-- Success Message -->
      <div class="mb-8 text-center">
        <div
          class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
        >
          <Icon icon="solar:check-circle-bold" class="text-2xl text-green-600" />
        </div>
        <h1 class="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
        <p class="mt-2 text-gray-600">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <!-- Order Details -->
        <div class="space-y-6">
          <div class="rounded-lg bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-xl font-semibold text-gray-900">Order Summary</h2>
            <div class="space-y-4">
              <div
                v-for="item in orderItems"
                :key="item.id"
                class="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
              >
                <img :src="item.image" :alt="item.name" class="h-16 w-16 rounded-md object-cover" />
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
                  <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
                  <p class="text-sm font-medium text-gray-900">
                    {{ formatCurrency(item.price * item.quantity) }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4 border-t border-gray-200 pt-4">
              <div class="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{{ formatCurrency(orderTotal) }}</span>
              </div>
            </div>
          </div>

          <!-- Expected Delivery -->
          <div class="rounded-lg bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-xl font-semibold text-gray-900">Expected Delivery</h2>
            <div class="flex items-center gap-3">
              <Icon icon="solar:truck-bold" class="text-2xl text-gray-600" />
              <div>
                <p class="font-medium text-gray-900">{{ expectedDelivery }}</p>
                <p class="text-sm text-gray-600">We'll send you tracking updates at your email</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Shipping & Billing Info -->
        <div class="space-y-6">
          <!-- Shipping Address -->
          <div class="rounded-lg bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-xl font-semibold text-gray-900">Shipping Address</h2>
            <div class="text-gray-700">
              <p class="font-medium">{{ shippingInfo.firstName }} {{ shippingInfo.lastName }}</p>
              <p>{{ shippingInfo.address }}</p>
              <p v-if="shippingInfo.apartment">{{ shippingInfo.apartment }}</p>
              <p>
                {{ shippingInfo.city }}, {{ shippingInfo.stateCode }} {{ shippingInfo.postalCode }}
              </p>
              <p>{{ shippingInfo.country }}</p>
            </div>
          </div>

          <!-- Billing Address -->
          <div v-if="!useShippingAsBilling" class="rounded-lg bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-xl font-semibold text-gray-900">Billing Address</h2>
            <div class="text-gray-700">
              <p>{{ billingAddress }}</p>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="rounded-lg bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-xl font-semibold text-gray-900">Payment Method</h2>
            <div class="flex items-center gap-3">
              <Icon icon="solar:card-bold" class="text-2xl text-gray-600" />
              <div>
                <p class="font-medium text-gray-900">
                  {{ paymentMethod === "card" ? "Credit Card" : "Other Payment" }}
                </p>
                <p class="text-sm text-gray-600">•••• •••• •••• {{ lastFourDigits }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Continue Shopping Button -->
      <div class="mt-8 text-center">
        <RouterLink
          :to="{ name: 'collections-query', params: { collection: 'all' } }"
          class="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
        >
          <Icon icon="solar:cart-2-bold" />
          Continue Shopping
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Logo from "@/ui/Logo.vue";
import { Icon } from "@iconify/vue";
import { formatCurrency } from "@/utils/helpers";

// Get data from route params or localStorage (since we can't pass complex objects through router)
const router = useRouter();

const orderItems = ref([]);
const orderTotal = ref(0);
const shippingInfo = ref({});
const billingAddress = ref("");
const paymentMethod = ref("");
const lastFourDigits = ref("");
const useShippingAsBilling = ref(true);
const expectedDelivery = ref("");

onMounted(() => {
  // Try to get order data from localStorage (set during checkout)
  const orderData = localStorage.getItem("lastOrderData");
  if (!orderData) {
    // No order data found - user shouldn't be here, redirect to home
    router.push({ name: "home" });
    return;
  }

  const data = JSON.parse(orderData);

  orderItems.value = data.items || [];
  orderTotal.value = data.total || 0;
  shippingInfo.value = data.shippingInfo || {};
  billingAddress.value = data.billingAddress || "";
  paymentMethod.value = data.paymentMethod || "";
  lastFourDigits.value = data.lastFourDigits || "";
  useShippingAsBilling.value = data.useShippingAsBilling !== false;

  // Calculate expected delivery (3-5 business days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5); // Add 5 days for delivery
  expectedDelivery.value = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Clean up localStorage
  localStorage.removeItem("lastOrderData");
});
</script>
