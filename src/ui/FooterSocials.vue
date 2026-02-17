<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const socials = ref([
  { path: "/", icon: "prime:twitter" },
  { path: "/", icon: "brandico:instagram-filled" },
  { path: "/", icon: "ion:logo-linkedin" },
  { path: "/", icon: "ion:logo-youtube" },
  { path: "/", icon: "brandico:facebook" },
]);
</script>

<template>
  <ul class="flex items-center gap-5 lg:justify-end">
    <RouterLink v-for="(item, i) in socials" :key="i" :to="item.path">
      <Icon :icon="item.icon" class="text-brand-primary" />
    </RouterLink>
  </ul>
</template>

<style lang="scss" scoped></style>
