<template>
  <div class="px-3.75 py-20 md:py-25">
    <div class="mx-auto max-w-142.5 bg-[#f3f3f3] px-5 py-7.5 md:px-10 md:py-9.25">
      <!-- Header and description -->
      <div class="mb-7.5 text-center">
        <h2 class="mb-1.25 text-3xl">{{ header }}</h2>
        <p class="text-[15px] text-neutral-700">{{ description }}</p>
      </div>

      <!-- Form fields -->
      <form @submit.prevent="handleFormSubmit">
        <slot></slot>

        <!-- Buttons -->
        <div class="mt-7.5 flex items-center justify-between">
          <ButtonOrLink type="submit" :text="buttonText" :disabled="disabled" />
          <RouterLink
            v-if="otherPagePath"
            :to="otherPagePath"
            class="ease text-[15px] transition-all duration-300 hover:text-neutral-700"
            >{{ otherPageText }}</RouterLink
          >
        </div>
        <RouterLink
          v-if="belowButtonText"
          :to="belowButtonPath"
          class="ease mt-5 inline-block text-[15px] transition-all duration-300 hover:text-neutral-700"
          >{{ belowButtonText }}</RouterLink
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import ButtonOrLink from "./ButtonOrLink.vue";

defineProps({
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  handleFormSubmit: {
    type: Function,
    // required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  otherPagePath: {
    type: String,
  },
  otherPageText: {
    type: String,
  },
  belowButtonText: {
    type: String,
    required: false,
  },
  belowButtonPath: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped></style>
