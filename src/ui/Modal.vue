<template>
  <div class="fixed inset-0 z-10000 overflow-hidden bg-black/30">
    <!-- Modal content -->
    <div
      class="mx-auto mt-5 grid w-full max-w-180 grid-cols-1 bg-white p-3.75 sm:mt-7 md:grid-cols-2 md:gap-12 md:p-6.25"
    >
      <div class="">
        <p class="mb-5 flex gap-3 font-semibold text-brand-success-green">
          <Icon icon="fa-solid:check-circle" class="text-3xl" />
          <span>Product Successfully Added To Your Shoping Cart</span>
        </p>

        <!-- image -->
        <div class="">
          <img :src="cartItem.image" alt="cart item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  cartItem: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
