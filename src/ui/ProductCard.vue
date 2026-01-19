<template>
  <article class="group">
    <!-- Images -->
    <!-- This height should be temp because the images are the actual bgs in lezada and their height is determined by the grid cells -->
    <div
      class="group relative flex h-43.75 items-center justify-center overflow-hidden bg-[#f5f5f5] md:h-[445.5px] lg:h-97.75 xl:h-123.25"
    >
      <img
        :src="image"
        alt="product on sale"
        class="size-1/2 scale-130 object-contain lg:scale-110"
      />

      <!-- Discount/banner?? -->
      <slot name="banner"></slot>

      <!-- Floating icons -->
      <div class="absolute top-1.5 right-2.5 z-9 flex flex-col gap-1.25 md:top-5 md:right-5">
        <SmallIconInBg
          icon="mdi:heart-outline"
          class="text-neutral-500 transition-all duration-500 hover:text-brand-primary lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        />
        <SmallIconInBg
          icon="iconoir:shuffle"
          class="text-neutral-500 transition-all duration-500 hover:text-brand-primary lg:translate-y-3.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        />
        <SmallIconInBg
          icon="mdi:search"
          class="text-neutral-500 transition-all duration-500 hover:text-brand-primary lg:translate-y-4.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        />
      </div>
    </div>

    <!-- Details -->
    <div class="mt-3.75 md:mt-6.25">
      <div class="relative mb-2.5 text-base md:text-[17px] md:leading-[1.6] lg:mb-1">
        <h3
          class="mb-3 transition-all duration-700 lg:mb-0 lg:group-hover:invisible lg:group-hover:-translate-y-3 lg:group-hover:opacity-0"
        >
          {{ title }}
        </h3>
        <slot name="floating-option">
          <button
            class="inline-block text-brand-accent transition-all duration-700 lg:invisible lg:absolute lg:top-3 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-0 lg:group-hover:opacity-100"
          >
            + Add to cart
          </button>
        </slot>
      </div>
      <p class="flex gap-3 font-medium">${{ price }}</p>
    </div>
  </article>
</template>

<script setup>
import { toRefs } from "vue"
import SmallIconInBg from "./SmallIconInBg.vue"

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { product } = toRefs(props)
const { image, title, price } = toRefs(product.value)
</script>

<style lang="scss" scoped></style>
