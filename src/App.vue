<script setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { Toaster } from "vue3-hot-toast";
// import { useUser } from "./composables/useUser";
// import useCart from "./composables/useCart";
// import { useWishlistStore } from "./stores/wishlist";

// const { isLoading: isUserLoading } = useUser();
// const { isLoading: isCartLoading } = useCart();
// const { isLoading: isWishlistLoading } = useWishlistStore();
</script>

<template>
  <RouterView />
  <Toaster />
  <VueQueryDevtools :initialIsOpen="false" />
</template>

<style scoped></style>
