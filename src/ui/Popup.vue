<template>
  <p
    class="invisible relative hidden translate-x-3 bg-brand-primary px-2 py-1.5 text-xs text-white opacity-0 shadow-xl transition-all duration-300 ease-in-out peer-hover:visible peer-hover:translate-x-0 peer-hover:opacity-100 lg:inline-block"
  >
    {{ text }}
    <span class="absolute top-1/2 left-[95%] -translate-y-1/2 text-xl text-brand-primary"
      >&#9654;</span
    >
  </p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
