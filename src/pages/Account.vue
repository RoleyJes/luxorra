<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main class="mx-auto w-full max-w-container px-3.75 py-20 md:py-25">
    <!-- Header -->
    <div class="flex items-end justify-between border-b border-b-[#ddd] pb-2.5">
      <h1 class="text-4xl">My Account</h1>

      <button @click="logout" class="text-brand-accent">Logout</button>
    </div>
  </main>
</template>

<script setup>
import { useLogout } from "@/composables/useLogout";
import BreadCrumbs from "@/ui/BreadCrumbs.vue";

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Account",
  },
];

const { logout } = useLogout();
</script>

<style lang="scss" scoped></style>
