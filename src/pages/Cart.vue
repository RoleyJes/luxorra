<script setup>
import useCart from "@/composables/useCart";
import BreadCrumbs from "@/ui/BreadCrumbs.vue";
import { Icon } from "@iconify/vue";
import { formatCurrency } from "@/utils/helpers";
import { reactive, ref } from "vue";
import { watch } from "vue";
import QuantityOptions from "@/ui/QuantityOptions.vue";
import ButtonOrLink from "@/ui/ButtonOrLink.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const agreed = ref(false);

const {
  cartData,
  isFetchingCart,
  fetchCartError,
  deletingId,
  deleteFromCart,
  addToCart,
  updateCart,
  updatingId,
  clearCart,
  isClearingCart,
  totalAmt,
} = useCart();

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Cart",
  },
];

const localInputQuantity = reactive({});

watch(
  cartData,
  (items) => {
    if (!items) return;
    items.forEach((item) => {
      localInputQuantity[item.id] = item.quantity;
    });
  },
  { immediate: true },
);
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main class="mx-auto w-full max-w-container px-3.75 py-20 md:py-25">
    <!-- Loading -->
    <div v-if="isFetchingCart">Fetching...</div>

    <!-- Empty cart -->
    <section v-else-if="cartData.length <= 0" class="flex flex-col items-center">
      <div class="mb-8.75 w-full bg-[#fff3cd] py-3.75 text-center text-[#856404]">
        Shopping Cart is Empty.
      </div>
      <Icon icon="carbon:shopping-cart-arrow-down" class="mb-8 text-8xl" />
      <p class="mb-7.5">You have no items in your shopping cart.</p>
      <ButtonOrLink
        :route="{ name: 'collections-query', params: { collection: 'all' } }"
        text="< continue shopping"
      />
    </section>

    <!-- Error -->
    <div v-else-if="fetchCartError">{{ fetchCartError.message }}</div>

    <!-- main cart details -->
    <div v-else>
      <!-- Cart items -->
      <section>
        <!-- headers -->
        <div class="grid grid-cols-[1fr_163px_286px_163px_160px] border border-neutral-200">
          <h3 class="border-r border-r-neutral-200 py-4 text-center uppercase">product</h3>
          <h3 class="border-r border-r-neutral-200 py-4 text-center uppercase">price</h3>
          <h3 class="border-r border-r-neutral-200 py-4 text-center uppercase">quantity</h3>
          <h3 class="border-r border-r-neutral-200 py-4 text-center uppercase">total</h3>
          <h3 class="py-4 text-center uppercase"></h3>
        </div>

        <!-- Items -->
        <div
          v-for="cartItem in cartData"
          :key="cartItem.id"
          class="relative grid h-40 grid-cols-[1fr_163px_286px_163px_160px] divide-x divide-neutral-200 overflow-hidden border-x border-b border-neutral-200"
        >
          <!-- Image and name cell -->
          <div class="grid grid-cols-[115px_1fr] divide-x divide-neutral-200">
            <!-- image -->
            <RouterLink
              :to="{ name: 'product-detail', params: { id: cartItem.id } }"
              class="flex items-center justify-center ps-6.25 pe-3.75"
            >
              <img :src="cartItem.image" :alt="cartItem.name" />
            </RouterLink>

            <!-- name -->
            <div class="flex items-center justify-center ps-6.25 pe-3.75">
              <RouterLink
                :to="{ name: 'product-detail', params: { id: cartItem.id } }"
                class="ps-6.25 pe-3.75 text-center text-neutral-600 transition-colors duration-300 ease-out hover:text-brand-primary"
              >
                {{ cartItem.name }}
              </RouterLink>
            </div>
          </div>

          <!-- Price -->
          <div class="flex items-center justify-center ps-6.25 pe-3.75">
            <p class="font-semibold">{{ formatCurrency(cartItem.price) }}</p>
          </div>

          <!-- Quantity -->
          <!-- <div class="flex items-center justify-center ps-6.25 pe-3.75">
          <div class="border-b-2 border-b-[#cccccc] pb-4">
            <button
              :disabled="deletingId === cartItem.id || updatingId === cartItem.id"
              @click="updateCart({ id: cartItem.id, type: 'decrement' })"
              class="text-xl disabled:cursor-not-allowed!"
            >
              <span>-</span>
            </button>
            <input
              type="text"
              v-model="localInputQuantity[cartItem.id]"
              class="w-20 px-3.75 text-center focus:outline-0"
              @blur="
                () => {
                  addToCart({ product_id: cartItem.id, quantity: localInputQuantity[cartItem.id] });
                }
              "
            />
            <button
              :disabled="deletingId === cartItem.id || updatingId === cartItem.id"
              class="w-5 text-xl disabled:cursor-not-allowed!"
              @click="updateCart({ id: cartItem.id, type: 'increment' })"
            >
              <span>+</span>
            </button>
          </div>
        </div> -->
          <QuantityOptions
            :item="cartItem"
            v-model="localInputQuantity[cartItem.id]"
            :updateMinus="() => updateCart({ id: cartItem.id, type: 'decrement' })"
            :updatePlus="() => updateCart({ id: cartItem.id, type: 'increment' })"
            :deletingId="deletingId"
            :updatingId="updatingId"
            :onBlur="
              () => {
                addToCart({ product_id: cartItem.id, quantity: localInputQuantity[cartItem.id] });
              }
            "
          />

          <!-- Total -->
          <div class="flex items-center justify-center ps-6.25 pe-3.75">
            <p class="font-semibold">{{ formatCurrency(cartItem.quantity * cartItem.price) }}</p>
          </div>

          <!-- Delete btn -->
          <div class="flex items-center justify-center ps-6.25 pe-3.75">
            <button
              class="group flex size-11.25 items-center justify-center border-2 border-[#e6e6e6] transition-all duration-250 ease-out hover:border-brand-accent disabled:cursor-not-allowed! disabled:bg-gray-100/50 disabled:hover:border-[#e6e6e6]"
              :disabled="deletingId === cartItem.id"
              @click="deleteFromCart(cartItem.id)"
            >
              <Icon
                :icon="deletingId === cartItem.id ? 'eos-icons:bubble-loading' : 'iconoir:cancel'"
                class="text-[22px] text-[#ababab] transition-all duration-250 ease-out group-hover:text-brand-accent group-disabled:text-[#ababab]"
              />
            </button>
          </div>
        </div>
      </section>

      <!-- 2 btns -->
      <div class="mt-7.5 mb-32.5 border-b border-b-neutral-border pb-7.5">
        <div class="flex justify-end gap-3">
          <ButtonOrLink
            :route="{ name: 'collections-query', params: { collection: 'all' } }"
            text="continue shopping"
          />
          <ButtonOrLink
            @click="clearCart"
            :disabled="isClearingCart"
            :text="isClearingCart ? 'clearing...' : 'clear cart'"
          />
        </div>
      </div>

      <!-- Delivery & total -->
      <div class="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
        <!-- Delivery -->
        <section class="space-y-12.5">
          <!-- Time & date -->
          <div class="space-y-3.75">
            <p class="mb-6.25 text-2xl">Pick a delivery date and Time</p>
            <!-- disable the dates before today-->
            <input type="date" class="h-11.25 w-75 px-8 shadow-input focus:outline-none" />
            <input type="text" class="h-11.25 w-75 px-8 shadow-input focus:outline-none" />
            <p>
              Pick delivery date and time as you choose. Delivery Time takes place between 12PM -
              4PM MON-FRI AND 8AM-11AM SAT.
            </p>
          </div>

          <!-- Shipping -->
        </section>

        <!-- Total -->
        <section class="bg-neutral-100 p-10">
          <p class="mb-10 text-center text-4xl">Cart Totals</p>
          <div class="mb-7.5 border border-neutral-300">
            <div class="flex border-b border-b-neutral-300">
              <p
                class="basis-[58%] border-r border-r-neutral-300 px-2.5 py-4 text-[#222] uppercase"
              >
                subtotal
              </p>
              <p class="ms-auto me-0 py-4 ps-2.5 pe-3.75 text-neutral-600">
                {{ formatCurrency(totalAmt) }}
              </p>
            </div>
            <div class="flex">
              <p
                class="basis-[58%] border-r border-r-neutral-300 px-2.5 py-4 text-[#222] uppercase"
              >
                total
              </p>
              <p class="ms-auto me-0 py-4 ps-2.5 pe-3.75 text-neutral-600">
                {{ formatCurrency(totalAmt) }}
              </p>
            </div>
          </div>

          <!-- Agree -->
          <div class="flex flex-col items-center">
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
                    router.push({ name: 'checkout' });
                  }
                }
              "
              text="proceed to checkout"
              class="mb-3.75 border-brand-accent! bg-brand-accent! hover:text-white! disabled:text-white! disabled:opacity-50"
            />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
