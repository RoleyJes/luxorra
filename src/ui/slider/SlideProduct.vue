<script setup>
import ButtonOrLink from "../ButtonOrLink.vue"

defineProps({
  img: {
    type: String,
  },
  badgeColor: {
    type: String,
    default: "text-[#c5a374]",
  },
})
</script>

<template>
  <div class="relative w-full xl:max-w-166.25">
    <img :src="img" alt="" class="w-full object-contain" />

    <!-- Texts -->
    <section class="absolute top-1/2 left-7.5 -translate-y-1/2 md:left-17.5">
      <p
        :class="[
          'text-xs leading-6.5 font-semibold tracking-[3px] uppercase md:mb-2 md:text-base md:leading-9',
          badgeColor,
        ]"
      >
        ACCESSORIES
      </p>
      <p class="mb-2.5 text-xl leading-9 font-semibold md:mb-9 md:text-[40px] md:leading-14">
        Bottle Grinder, <br />Small, 2-Piecehe
      </p>

      <!-- Button -->
      <ButtonOrLink
        text="shop now"
        class="px-3.75 py-1.25 text-[10px] leading-6 md:px-11.25 md:py-2.5 md:text-sm"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
