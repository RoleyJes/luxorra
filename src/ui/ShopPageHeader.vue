<template>
  <div class="border-b border-b-[#d8d8d8] py-5">
    <div
      class="mx-auto flex max-w-container items-center justify-between px-3.75 md:gap-20 md:px-7 lg:px-10"
    >
      <!-- Grid controls -->
      <div class="flex items-center gap-5">
        <Icon
          icon="material-symbols-light:background-grid-small-sharp"
          class="hidden cursor-pointer text-2xl text-[#ccc] transition-all duration-300 hover:text-brand-primary md:inline-block"
        />
        <Icon
          icon="material-symbols-light:grid-on-sharp"
          class="hidden cursor-pointer text-2xl text-[#ccc] transition-all duration-300 hover:text-brand-primary md:inline-block"
        />
        <Icon
          icon="material-symbols-light:grid-view"
          class="cursor-pointer text-2xl text-[#ccc] transition-all duration-300 hover:text-brand-primary"
        />
        <Icon
          icon="ion:list-sharp"
          class="cursor-pointer text-2xl text-[#ccc] transition-all duration-300 hover:text-brand-primary"
        />
      </div>

      <!-- Filter options -->
      <div
        class="flex items-center justify-between text-[15px] text-neutral-600 md:gap-6 xl:gap-10"
      >
        <!-- Paginated details -->
        <p class="hidden lg:block">
          <span>Showing <span>1</span> – <span>10</span> of <span>54</span> results</span>
        </p>

        <!-- Number of displayed products per page -->
        <div class="hidden items-center gap-2 md:flex">
          <span>Show</span>
          <SelectField name="show" id="show" value="10">
            <option v-for="(_, i) in 10" :key="i" :value="i + 1">{{ i + 1 }}</option>
          </SelectField>
          <span class="hidden lg:block">per page</span>
        </div>

        <!-- Sort by -->
        <div class="hidden items-center gap-2 md:flex">
          <span>Sort by</span>
          <SelectField name="sortBy" id="sortBy" value="alphabeticallyAZ">
            <option v-for="(item, i) in sortByOptions" :key="i" :value="item.value">
              {{ item.label }}
            </option>
          </SelectField>
        </div>

        <!-- Filter -->
        <button class="flex items-start gap-1 text-neutral-500 lg:hidden">
          <Icon icon="ph:funnel-simple-light" class="text-xl" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue"
import SelectField from "./SelectField.vue"
import { ref } from "vue"

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
])
</script>

<style lang="scss" scoped></style>
