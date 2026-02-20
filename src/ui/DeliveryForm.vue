<template>
  <section class="max-w-xl space-y-6">
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

    <button
      @click="validate"
      class="mt-4 w-full rounded-md bg-black px-6 py-3 text-white hover:opacity-90"
    >
      Continue
    </button>
  </section>
</template>

<script setup>
import { reactive, computed, watch } from "vue";
import { Country, State } from "country-state-city";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";

const form = reactive({
  country: "",
  countryCode: "",
  stateCode: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  postalCode: "",
});

const errors = reactive({
  lastName: "",
  address: "",
  city: "",
  state: "",
});

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

/* -----------------------
   Validation
----------------------- */
function validate() {
  errors.lastName = form.lastName ? "" : "Enter a last name";
  errors.address = form.address ? "" : "Enter an address";
  errors.city = form.city ? "" : "Enter a city";
  errors.state = form.stateCode ? "" : "Select a state / province";
}

const emit = defineEmits(["update:shipping"]);

watch(
  () => form.address,
  (val) => {
    emit("update:shipping", val);
  },
);
</script>
