<script setup>
import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "medium",
  },
  route: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});

const types = {
  medium: "text-sm md:text-sm py-2 leading-6 px-5 md:py-2.5 md:px-11.25",
};
</script>

<template>
  <component
    :is="route ? 'RouterLink' : 'button'"
    :class="[
      'inline-block cursor-pointer rounded-none border border-brand-primary bg-brand-primary font-medium tracking-[1px] text-white uppercase transition-all duration-300 hover:bg-transparent hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-primary/50',
      types[variant],
    ]"
    :disabled="disabled"
  >
    {{ text }}
  </component>
</template>

<style lang="scss" scoped></style>
