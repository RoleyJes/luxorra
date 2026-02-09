<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main class="mx-auto w-full max-w-container px-3.75 py-20 md:py-25">
    <!-- Header -->
    <div class="flex items-end justify-between border-b border-b-[#ddd] pb-2.5">
      <h1 class="text-4xl">My Account</h1>

      <button @click="handleLogout" class="text-brand-accent">Logout</button>
    </div>
  </main>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import BreadCrumbs from "@/ui/BreadCrumbs.vue";
import { useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Account",
  },
];

const queryClient = useQueryClient();

function handleLogout() {
  queryClient.removeQueries({ queryKey: ["user"] });
  authStore.logout();
  router.push({ name: "login" });
}
</script>

<style lang="scss" scoped></style>
