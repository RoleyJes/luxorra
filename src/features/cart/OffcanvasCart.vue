<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import ButtonOrLink from "@/ui/ButtonOrLink.vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { AnimatePresence, motion } from "motion-v";
import useCart from "@/composables/useCart";

const router = useRouter();
const cartStore = useCartStore();
const { cartLength, cartData, totalAmt } = useCart();
const agreed = ref(false);
</script>

<template>
  <AnimatePresence>
    <!-- Overlay -->
    <motion.div
      v-if="cartStore.offcanvasCart"
      @click.self="cartStore.toggleOffcanvasCart()"
      key="cartOverlay"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.3 }"
      class="fixed z-9998 flex size-full justify-end bg-black/50"
    >
      <!-- main content -->
      <motion.div
        key="offcanvasCart"
        :initial="{ x: '250%' }"
        :animate="{ x: 0 }"
        :exit="{ x: '250%' }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
        class="fixed z-9999 h-full w-75 overflow-auto bg-white p-5 md:w-95"
      >
        <!-- header -->
        <div
          class="mb-5 flex items-center justify-between border-b border-b-neutral-border pb-1.25"
        >
          <h3 class="text-lg font-medium">Cart</h3>
          <button @click="cartStore.toggleOffcanvasCart()">
            <Icon
              icon="iconoir:cancel"
              class="text-[28px] transition duration-500 hover:rotate-90"
            />
          </button>
        </div>

        <!-- Empty cart -->
        <h3 v-if="cartLength < 1" class="text-xl">Your cart is currently empty</h3>

        <!-- Cart items -->
        <section v-else>
          <!-- Items -->
          <div class="mb-5 max-h-82.5 overflow-y-auto">
            <article
              v-for="product in cartData"
              :key="product.id"
              class="mb-6.25 flex gap-3.75 border-b border-b-neutral-border pb-6.25"
            >
              <!-- image -->
              <div class="relative min-h-px shrink-0 basis-20 bg-[#f5f5f5] pt-[35%]">
                <img
                  :src="product.image"
                  alt="product on sale"
                  class="absolute top-1/2 left-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 scale-110 object-contain transition-all"
                />
              </div>

              <!-- details -->
              <div class="space-y-2">
                <div class="flex items-center justify-between gap-12">
                  <p class="line-clamp-1 text-[15px] leading-[1.3]">{{ product.name }}</p>
                  <button @click="cartStore.deleteFromCart(product)">
                    <Icon
                      icon="iconoir:cancel"
                      class="text-base transition duration-300 hover:text-red-500"
                    />
                  </button>
                </div>
                <p>
                  <span class="text-xs text-neutral-500">{{ product.quantity }} x </span>
                  <span class="text-sm font-semibold">{{ product.price }}</span>
                </p>
              </div>
            </article>
          </div>

          <!-- Total -->
          <div
            class="mb-7.5 flex items-center justify-between border-y border-y-neutral-border py-2.5 font-semibold"
          >
            <p>Total:</p>
            <p>{{ totalAmt }}</p>
          </div>

          <!-- Agree -->
          <div class="mb-2.5 flex items-center gap-2.5">
            <input id="t-and-c" type="checkbox" v-model="agreed" />
            <label for="t-and-c">I agree with the terms and conditions</label>
          </div>

          <!-- Buttons -->
          <ButtonOrLink
            :disabled="!agreed"
            @click="
              () => {
                if (agreed) {
                  cartStore.toggleOffcanvasCart();
                  router.push({ name: 'checkout' });
                }
              }
            "
            text="checkout"
            class="mb-3.75 w-full border-brand-accent! bg-brand-accent! hover:text-white! disabled:cursor-not-allowed! disabled:opacity-50"
          />

          <ButtonOrLink text="view cart" class="w-full" />
        </section>
      </motion.div>
    </motion.div>
  </AnimatePresence>
</template>

<style lang="scss" scoped></style>
