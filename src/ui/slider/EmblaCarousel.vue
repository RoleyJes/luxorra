<script setup>
import { ref } from "vue"
import emblaCarouselVue from "embla-carousel-vue"
import SlideProduct from "./SlideProduct.vue"

import hero1 from "@/assets/hero/hero1.webp"
import hero2 from "@/assets/hero/hero2.webp"
import hero3 from "@/assets/hero/hero3.webp"
import hero4 from "@/assets/hero/hero4.webp"
import { Icon } from "@iconify/vue"

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  duration: 40,
})

const products = ref([
  { img: hero1, badgeColor: "text-[#68aaeb]" },
  { img: hero2 },
  { img: hero3, badgeColor: "text-[#7a9f63]" },
  { img: hero4 },
])

function scrollNext() {
  emblaApi.value?.scrollNext()
}

function scrollPrev() {
  emblaApi.value?.scrollPrev()
}
</script>

<template>
  <div class="embla group relative">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <div v-for="(product, i) in products" :key="i" class="embla__slide px-0 xl:px-25">
          <SlideProduct :img="product.img" :badgeColor="product.badgeColor" />
        </div>
      </div>
    </div>

    <div>
      <button
        class="embla__prev emblaBtns absolute left-[0%] xl:left-2/12 xl:opacity-0 xl:group-hover:opacity-100"
        @click="scrollPrev"
      >
        <Icon
          icon="hugeicons:less-than"
          class="size-7 text-neutral-300 transition-all duration-300 hover:text-brand-primary md:size-14 lg:size-18 xl:text-[#e7e7e7]"
        />
      </button>
      <button
        class="embla__next emblaBtns absolute right-[0%] xl:right-2/12 xl:opacity-0 xl:group-hover:opacity-100"
        @click="scrollNext"
      >
        <Icon
          icon="hugeicons:greater-than"
          class="size-7 text-neutral-300 transition-all duration-300 hover:text-brand-primary md:size-14 lg:size-18 xl:text-[#e7e7e7]"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.embla {
  --slide-height: 22.06rem;
  --slide-spacing: 1rem;
  --slide-size: 865px;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
}
.embla__slide {
  /* transform: translate3d(0, 0, 0); */
  flex: 0 0 var(--slide-size);
}
@media (max-width: 1200px) {
  .embla__slide {
    flex: 0 0 100%;
  }
}

.emblaBtns {
  z-index: 5;
  cursor: pointer;
  transition: opacity 0.3s;
  top: 50%;
  transform: translateY(-50%);
}
</style>
