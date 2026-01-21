<script setup>
import BreadCrumbs from "@/ui/BreadCrumbs.vue"
import FormField from "@/ui/FormField.vue"
import RegistrationLayout from "@/ui/RegistrationLayout.vue"

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Account",
  },
]
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main>
    <RegistrationLayout
      header="Login"
      description="Please login using account detail below."
      buttonText="Login"
      other-page-path="/account/forgot-password"
      other-page-text="Forgot your password?"
      below-button-text="Create account"
      below-button-path="/account/register"
    >
      <div class="space-y-5">
        <FormField inputType="text" placeholder="Email" autfocus aria-autocomplete="false" />
        <FormField inputType="text" placeholder="Password" />
      </div>
    </RegistrationLayout>
  </main>
</template>

<style lang="scss" scoped></style>
