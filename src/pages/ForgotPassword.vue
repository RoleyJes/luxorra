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
      header="Reset your password"
      description="We will send you an email to reset your password."
      buttonText="Submit"
      other-page-path="/account/login"
      other-page-text="Cancel"
    >
      <div class="space-y-5">
        <FormField inputType="text" placeholder="Email" autfocus aria-autocomplete="false" />
      </div>
    </RegistrationLayout>
  </main>
</template>

<style lang="scss" scoped></style>
