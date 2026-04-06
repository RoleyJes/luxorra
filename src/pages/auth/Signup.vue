<script setup>
import { useSignup } from "@/composables/useSignup";
import BreadCrumbs from "@/ui/BreadCrumbs.vue";
import FormField from "@/ui/FormField.vue";
import RegistrationLayout from "@/ui/RegistrationLayout.vue";
import { reactive } from "vue";

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Account",
  },
];

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone_number: "",
  address: "",
});

const { isSigningUp, signup } = useSignup();

function handleSingup() {
  signup({ ...formData, name: `${formData.firstName + " " + formData.lastName}` });
}
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main>
    <RegistrationLayout
      header="Create Account"
      description="Please register using account detail below."
      buttonText="Create"
      other-page-path="/account/login"
      other-page-text="Already have an account? Login"
      below-button-text="Return to"
      below-button-text-link="Store"
      below-button-path="/"
      :handleFormSubmit="handleSingup"
      :disabled="isSigningUp"
    >
      <div class="space-y-5">
        <FormField
          inputType="text"
          placeholder="First Name"
          v-model="formData.firstName"
          label="First Name"
          inputId="firstName"
          :disabled="isSigningUp"
        />
        <FormField
          inputType="text"
          placeholder="Last Name"
          label="Last Name"
          v-model="formData.lastName"
          inputId="lastName"
          :disabled="isSigningUp"
        />
        <FormField
          inputType="text"
          placeholder="Email"
          label="Email"
          v-model="formData.email"
          inputId="email"
          :disabled="isSigningUp"
        />
        <FormField
          inputType="text"
          placeholder="Password"
          label="Password"
          v-model="formData.password"
          inputId="password"
          :disabled="isSigningUp"
        />
        <FormField
          inputType="text"
          placeholder="Phone Number"
          label="Phone Number"
          v-model="formData.phone_number"
          inputId="phoneNumber"
          :disabled="isSigningUp"
        />
        <FormField
          inputType="text"
          placeholder="Address"
          label="Address"
          v-model="formData.address"
          inputId="address"
          :disabled="isSigningUp"
        />
      </div>
    </RegistrationLayout>
  </main>
</template>

<style lang="scss" scoped></style>
