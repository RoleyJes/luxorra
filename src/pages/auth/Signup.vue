<script setup>
import { useSignup } from "@/composables/useSignup";
import BreadCrumbs from "@/ui/BreadCrumbs.vue";
import FormField from "@/ui/FormField.vue";
import RegistrationLayout from "@/ui/RegistrationLayout.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import toast from "vue3-hot-toast";

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Account",
  },
];

const router = useRouter();

const formData = reactive({
  name: "Toju",
  email: "toju@test.com",
  password: "toju1234",
  phone_number: "1234567890",
  address: "toju street",
});

const { isSigningUp, signup } = useSignup();

function handleSingup() {
  signup(formData, {
    onSuccess: () => {
      toast.success("You've successfully registered");
      router.push("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main>
    <RegistrationLayout
      header="Create Account"
      description="Please register using account detail below."
      buttonText="Create"
      below-button-text="Return to Store"
      below-button-path="/"
      :handleFormSubmit="handleSingup"
      :disabled="isSigningUp"
    >
      <div class="space-y-5">
        <!-- <FormField
          inputType="text"
          placeholder="First Name"
          label="First Name"
          inputId="firstName"
        /> -->
        <FormField
          inputType="text"
          placeholder="Name"
          label="Name"
          v-model="formData.name"
          inputId="name"
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
