<template>
  <article :class="['group', productsStore.productsPerRow === 1 ? 'md:flex md:gap-12' : '']">
    <!-- <article class="group"> -->
    <!-- Images -->
    <!-- This height should be temp because the images are the actual bgs in lezada and their height is determined by the grid cells -->
    <!-- <div
      class="group relative flex h-43.75 items-center justify-center overflow-hidden bg-[#f5f5f5] md:h-[445.5px] lg:h-97.75 xl:h-123.25"
    > -->

    <!-- This is the one i used for fake api products. I'm keeping it for the styling of the image. -->
    <!-- <div
      :class="[
        'group pt-[130%] relative min-h-px overflow-hidden bg-[#f5f5f5] transition-all duration-250 ease-out',
        imgContainerClass,
      ]"
    > -->
    <!-- <div
      :class="[
        'group relative min-h-px overflow-hidden bg-[#f5f5f5] pt-[120%] transition-all duration-250 ease-out',
        imgContainerClass,
      ]"
    > -->
    <div
      :class="[
        'group relative min-h-px overflow-hidden pt-[120%] transition-all duration-250 ease-out',
        imgContainerClass,
      ]"
    >
      <!-- <img
        :src="image"
        alt="product on sale"
        class="-translate-x1/2 -translate-y1/2 top1/2 left1/2 xl:scale90 absolute inset-0 aspect-9/11 size-full object-contain transition-all duration-900"
      /> -->
      <img
        :src="image"
        alt="product on sale"
        class="-translate-x1/2 -translate-y1/2 top1/2 left1/2 xl:scale90 absolute inset-0 size-full object-contain transition-all duration-900"
      />
      <!-- <img
        :src="image"
        alt="product on sale"
        class="absolute top-1/2 left-1/2 size-4/5 -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-900 xl:scale-110"
      /> -->
      <!-- <img
        :src="image"
        alt="product on sale"
        class="size-1/2 scale-130 object-contain lg:scale-110"
      /> -->

      <!-- Discount/banner?? -->
      <slot name="banner"></slot>

      <!-- Floating icons -->
      <div
        class="absolute top-1.5 right-2.5 z-9 flex flex-col gap-1.25 md:top-5 md:right-5 lg:items-end"
      >
        <!-- Wishlist -->
        <button
          class="flex flex-row-reverse items-center gap-4"
          @click="wishlistStore.toggleWishlist(product)"
        >
          <SmallIconInBg
            :icon="isWishlisted ? 'mdi:heart' : 'mdi:heart-outline'"
            class="peer transition-all duration-500 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
            :class="[
              isWishlisted ? 'text-brand-primary' : 'text-neutral-500 hover:text-brand-primary',
            ]"
          />
          <Popup :text="`${isWishlisted ? 'Remove from' : 'Add to'} wishlist`" />
        </button>

        <!-- Compare -->
        <div class="flex flex-row-reverse items-center gap-4">
          <SmallIconInBg
            icon="iconoir:shuffle"
            class="peer text-neutral-500 transition-all duration-500 hover:text-brand-primary lg:translate-y-3.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          />
          <Popup text="Compare" />
        </div>

        <!-- Quick View-->
        <div class="flex flex-row-reverse items-center gap-4">
          <SmallIconInBg
            icon="mdi:search"
            class="peer text-neutral-500 transition-all duration-500 hover:text-brand-primary lg:translate-y-4.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          />
          <Popup text="Quick View" />
        </div>
      </div>
    </div>

    <!-- Details -->
    <div class="mt-3.75 md:mt-6.25">
      <div class="relative mb-2.5 text-base md:text-[17px] md:leading-[1.6] lg:mb-1">
        <h3
          :class="[
            'mb-3 transition-all duration-700',
            productsStore.productsPerRow === 1
              ? ''
              : 'line-clamp-1 lg:mb-0 lg:group-hover:invisible lg:group-hover:-translate-y-3 lg:group-hover:opacity-0',
          ]"
        >
          {{ name }}
        </h3>

        <!-- Add to cart -->
        <slot name="floating-option">
          <button
            @click="() => handleAddToCart(product)"
            :class="[
              'inline-block text-brand-accent transition-all duration-700',
              productsStore.productsPerRow === 1
                ? ''
                : 'lg:invisible lg:absolute lg:top-3 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-0 lg:group-hover:opacity-100',
            ]"
          >
            {{ !isAddingToCart ? "+ Add to cart" : "Adding..." }}
          </button>
        </slot>
      </div>
      <p class="flex gap-3 font-medium">${{ price }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed, toRefs } from "vue";
import SmallIconInBg from "./SmallIconInBg.vue";
import Popup from "./Popup.vue";
import { useProductsStore } from "@/stores/products";
import { useWishlistStore } from "@/stores/wishlist";
import useCart from "@/composables/useCart";

const productsStore = useProductsStore();
const wishlistStore = useWishlistStore();
const { addToCart, isAddingToCart } = useCart();

const isWishlisted = computed(() => wishlistStore.wishlist.some((p) => p.id === product.value.id));

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  imgContainerClass: {
    type: String,
    required: false,
  },
});

const { product } = toRefs(props);
const { image, name, price } = toRefs(product.value);

function handleAddToCart(product) {
  addToCart({ product_id: product.id, quantity: 1 });
}
</script>

<style lang="scss" scoped></style>
