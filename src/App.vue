<script setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { Toaster } from "vue3-hot-toast";
</script>

<template>
  <RouterView />
  <Toaster />
  <VueQueryDevtools :initialIsOpen="false" />
</template>

<style scoped></style>
