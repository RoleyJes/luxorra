<script setup>
import { Icon } from "@iconify/vue";
import SelectField from "./SelectField.vue";
import { ref } from "vue";
import { useProductsStore } from "@/stores/products";
// import { useProducts } from "@/composables/useProducts";

const sortByOptions = ref([
  {
    label: "Featured",
    value: "featured",
  },
  {
    label: "Best Selling",
    value: "bestSelling",
  },
  {
    label: "Alphabetically, A - Z",
    value: "alphabeticallyAZ",
  },
  {
    label: "Alphabetically, Z - A",
    value: "alphabeticallyZA",
  },
  {
    label: "Price, low to high",
    value: "priceAsc",
  },
  {
    label: "Price, high to low",
    value: "priceDesc",
  },
  {
    label: "Date, new to old",
    value: "dateNewToOld",
  },
  {
    label: "Date, old to new",
    value: "dateOldToNew",
  },
]);

const icons = ref([
  {
    icon: "material-symbols-light:background-grid-small-sharp",
    hidden: true,
    num: 4,
  },
  {
    icon: "material-symbols-light:grid-on-sharp",
    hidden: true,
    num: 3,
  },
  {
    icon: "material-symbols-light:grid-view",
    num: 2,
  },
  {
    icon: "ion:list-sharp",
    num: 1,
  },
]);

const store = useProductsStore();

defineProps({
  from: {
    type: Number,
  },
  to: {
    type: Number,
  },
  total: {
    type: Number,
  },
});
</script>

<template>
  <div class="border-b border-b-[#d8d8d8] py-5">
    <div
      class="mx-auto flex max-w-container items-center justify-between px-3.75 md:gap-20 md:px-7 lg:px-10"
    >
      <!-- Grid controls -->
      <div class="flex items-center gap-5">
        <Icon
          v-for="(icon, i) in icons"
          :key="i"
          @click="store.updateProductsPerRow(icon.num)"
          :icon="icon.icon"
          :class="[
            'cursor-pointer text-2xl transition-all duration-300 hover:text-brand-primary',
            icon.hidden ? 'hidden md:inline-block' : '',
            icon.num === store.productsPerRow ? 'text-brand-primary' : 'text-[#ccc]',
          ]"
        />
      </div>

      <!-- Filter options -->
      <div
        class="flex items-center justify-between text-[15px] text-neutral-600 md:gap-6 xl:gap-10"
      >
        <!-- Paginated details -->
        <p class="hidden lg:block">
          <span
            >Showing <span>{{ from }}</span> – <span>{{ to }}</span> of
            <span>{{ total }}</span> results</span
          >
        </p>

        <!-- Number of displayed products per page -->
        <slot></slot>

        <!-- Sort by -->
        <!-- <div class="hidden items-center gap-2 md:flex">
          <span>Sort by</span>
          <SelectField name="sortBy" id="sortBy" v-model="sortByOptions[0].value">
            <option v-for="(item, i) in sortByOptions" :key="i" :value="item.value">
              {{ item.label }}
            </option>
          </SelectField>
        </div> -->

        <!-- Filter -->
        <!-- <button class="flex items-start gap-1 text-neutral-500 lg:hidden">
          <Icon icon="ph:funnel-simple-light" class="text-xl" />
          <span>Filters</span>
        </button> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
