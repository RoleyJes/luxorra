<template>
  <!-- <div class="mt-8"> -->
  <!-- <DeliveryForm /> -->
  <!-- <DeliveryForm @update:shipping="shippingAddress = $event" /> -->
  <!-- </div> -->

  <!-- Delivery -->
  <section class="mt-8 max-w-xl space-y-6">
    <h2 class="text-xl font-semibold">Delivery</h2>

    <!-- Country -->
    <BaseSelect v-model="form.countryCode" placeholder="Country / Region" :options="countries" />

    <!-- Name Row -->
    <div class="grid grid-cols-2 gap-4">
      <BaseInput v-model="form.firstName" placeholder="First name (optional)" />

      <BaseInput v-model="form.lastName" placeholder="Last name" :error="errors.lastName" />
    </div>

    <!-- Address -->
    <BaseInput v-model="form.address" placeholder="Address" :error="errors.address" />

    <BaseInput v-model="form.apartment" placeholder="Apartment, suite, etc. (optional)" />

    <!-- City / State / Postal -->
    <div class="grid grid-cols-3 gap-4">
      <BaseInput v-model="form.city" placeholder="City" :error="errors.city" />

      <BaseSelect
        v-model="form.stateCode"
        placeholder="State"
        :options="states"
        :error="errors.state"
      />

      <BaseInput v-model="form.postalCode" placeholder="Postal code (optional)" />
    </div>
  </section>

  <!-- Payment -->
  <section class="mt-10 space-y-6">
    <h2 class="text-xl font-semibold">Payment</h2>

    <!-- Payment Method -->
    <div class="rounded-md border p-4">
      <label class="flex cursor-pointer items-center gap-3">
        <input type="radio" value="card" v-model="paymentMethod" />
        <span>Credit card</span>
      </label>

      <div v-if="paymentMethod === 'card'" class="mt-4 space-y-4">
        <BaseInput v-model="form.number" placeholder="Card number" :error="errors.cardNumber" />

        <div class="grid grid-cols-2 gap-4">
          <BaseInput
            v-model="form.expiry"
            placeholder="Expiration date (MM / YY)"
            :error="errors.expiry"
          />
          <BaseInput v-model="form.cvc" placeholder="Security code" :error="errors.cvc" />
        </div>

        <BaseInput v-model="form.name" placeholder="Name on card" :error="errors.cardName" />
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
          v-model="form.billingAddress"
          placeholder="Billing address"
          :error="errors.billingAddress"
        />
      </div>
    </div>

    <!-- Pay Button -->
    <button
      @click="submitPayment"
      :disabled="isLoading || isEmptyCart"
      class="mt-6 w-full rounded-md bg-black py-4 text-white disabled:cursor-not-allowed! disabled:opacity-50"
    >
      {{ isLoading ? "Processing..." : "Pay now" }}
    </button>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import { watch } from "vue";
import { Country, State } from "country-state-city";

const emit = defineEmits(["checkout"]);

defineProps({
  // shippingAddress: String,
  isLoading: Boolean,
  isEmptyCart: Boolean,
});

const paymentMethod = ref("card");
const useShippingAsBilling = ref(true);

const form = reactive({
  country: "Nigeria",
  countryCode: "NGN",
  stateCode: "PL",
  firstName: "hkgk",
  lastName: "kjhjkh",
  address: "hghjk",
  apartment: "uhkh",
  city: "hhhk",
  postalCode: "hghg",
  number: "khkj",
  expiry: "fhfg",
  billingAddress: "",
  cvc: "gg",
  name: "hghg",
});

const errors = reactive({
  lastName: "",
  address: "",
  city: "",
  state: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  cardName: "",
  billingAddress: "",
});

function validate() {
  errors.lastName = form.lastName ? "" : "Enter a last name";
  errors.address = form.address ? "" : "Enter an address";
  errors.city = form.city ? "" : "Enter a city";
  errors.countryCode = form.countryCode ? "" : "Select a country / region";
  errors.state = form.stateCode ? "" : "Select a state / province";
  errors.cardNumber = form.number ? "" : "Enter a card number";
  errors.expiry = form.expiry ? "" : "Enter a valid expiration date";
  errors.cvc = form.cvc ? "" : "Enter CVV";
  errors.cardName = form.name ? "" : "Enter name on card";

  if (!useShippingAsBilling.value) {
    errors.billingAddress = form.billingAddress ? "" : "Enter billing address";
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
    billing_address: useShippingAsBilling.value ? form.address : form.billingAddress,
    shipping_address: form.address,
  });
}

/* -----------------------
   Countries
----------------------- */
const countries = Country.getAllCountries().map((c) => ({
  label: c.name,
  value: c.isoCode,
}));

/* -----------------------
   States (dependent)
----------------------- */
const states = computed(() => {
  if (!form.countryCode) return [];

  return State.getStatesOfCountry(form.countryCode).map((s) => ({
    label: s.name,
    value: s.isoCode,
  }));
});

/* -----------------------
   Reset state when country changes
----------------------- */
watch(
  () => form.countryCode,
  () => {
    form.stateCode = "";
  },
);
</script>
