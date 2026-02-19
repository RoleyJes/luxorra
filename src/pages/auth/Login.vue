<script setup>
import { useLogin } from "@/composables/useLogin";
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
  email: "toju@test15.com",
  password: "toju1234",
});

const { isLoggingIn, login } = useLogin();

async function handleLogin() {
  login(formData);
}
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main>
    <RegistrationLayout
      :handleFormSubmit="handleLogin"
      header="Login"
      description="Please login using account detail below."
      buttonText="Login"
      other-page-path="/account/forgot-password"
      other-page-text="Forgot your password?"
      below-button-text="Create account"
      below-button-path="/account/register"
      :disabled="isLoggingIn"
    >
      <div class="space-y-5">
        <FormField
          inputType="text"
          placeholder="Email"
          id="email"
          v-model="formData.email"
          :disabled="isLoggingIn"
        />
        <FormField
          inputType="text"
          placeholder="Password"
          type="password"
          id="password"
          v-model="formData.password"
          :disabled="isLoggingIn"
        />
      </div>
    </RegistrationLayout>
  </main>
</template>

<style lang="scss" scoped></style>
