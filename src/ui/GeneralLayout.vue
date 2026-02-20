<script setup>
import GeneralFooter from "./GeneralFooter.vue";
import GeneralNavbar from "./GeneralNavbar.vue";
</script>

<template>
  <div class="flex h-screen flex-col">
    <GeneralNavbar />
    <div class="mt-20">
      <RouterView />
    </div>
    <GeneralFooter />
  </div>
</template>

<style scoped></style>
