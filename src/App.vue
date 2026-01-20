<script setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools"
</script>

<template>
  <RouterView />
  <VueQueryDevtools :initialIsOpen="false" />
</template>

<style scoped></style>
