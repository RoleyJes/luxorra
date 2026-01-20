<template>
  <div class="flex size-8 items-center justify-center bg-white md:h-10.5 md:w-10 cursor-pointer" >
    <Icon :icon="icon" class="size-4 md:size-5" />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue"

defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
