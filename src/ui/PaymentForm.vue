<template>
  <section class="mt-10 space-y-6">
    <h2 class="text-xl font-semibold">Payment</h2>

    <!-- Payment Method -->
    <div class="rounded-md border p-4">
      <label class="flex cursor-pointer items-center gap-3">
        <input type="radio" value="card" v-model="paymentMethod" />
        <span>Credit card</span>
      </label>

      <div v-if="paymentMethod === 'card'" class="mt-4 space-y-4">
        <BaseInput v-model="card.number" placeholder="Card number" :error="errors.cardNumber" />

        <div class="grid grid-cols-2 gap-4">
          <BaseInput
            v-model="card.expiry"
            placeholder="Expiration date (MM / YY)"
            :error="errors.expiry"
          />
          <BaseInput v-model="card.cvc" placeholder="Security code" :error="errors.cvc" />
        </div>

        <BaseInput v-model="card.name" placeholder="Name on card" :error="errors.cardName" />
      </div>
    </div>

    <!-- Billing Address -->
    <div class="space-y-4">
      <label class="flex items-center gap-2">
        <input type="checkbox" v-model="useShippingAsBilling" />
        <span>Use shipping address as billing address</span>
      </label>

      <div v-if="!useShippingAsBilling" class="space-y-4">
        <BaseInput
          v-model="billing.address"
          placeholder="Billing address"
          :error="errors.billingAddress"
        />
      </div>
    </div>

    <!-- Pay Button -->
    <button
      @click="submitPayment"
      :disabled="isLoading"
      class="mt-6 w-full rounded-md bg-black py-4 text-white disabled:opacity-50"
    >
      {{ isLoading ? "Processing..." : "Pay now" }}
    </button>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import BaseInput from "./BaseInput.vue";

const emit = defineEmits(["checkout"]);

const props = defineProps({
  shippingAddress: String,
  isLoading: Boolean,
});

const paymentMethod = ref("card");
const useShippingAsBilling = ref(true);

const card = reactive({
  number: "",
  expiry: "",
  cvc: "",
  name: "",
});

const billing = reactive({
  address: "",
});

const errors = reactive({
  cardNumber: "",
  expiry: "",
  cvc: "",
  cardName: "",
  billingAddress: "",
});

function validate() {
  errors.cardNumber = card.number ? "" : "Enter a card number";
  errors.expiry = card.expiry ? "" : "Enter a valid expiration date";
  errors.cvc = card.cvc ? "" : "Enter CVV";
  errors.cardName = card.name ? "" : "Enter name on card";

  if (!useShippingAsBilling.value) {
    errors.billingAddress = billing.address ? "" : "Enter billing address";
  }

  return (
    !errors.cardNumber &&
    !errors.expiry &&
    !errors.cvc &&
    !errors.cardName &&
    !errors.billingAddress
  );
}

function submitPayment() {
  if (!validate()) return;

  emit("checkout", {
    payment_method: paymentMethod.value,
    billing_address: useShippingAsBilling.value ? props.shippingAddress : billing.address,
  });
}
</script>
