<script setup>
import ProductCard from "./ProductCard.vue";
import ProductCardSkeleton from "./ProductCardSkeleton.vue";
import ShopPageHeader from "./ShopPageHeader.vue";
import BreadCrumbs from "./BreadCrumbs.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useProductsStore } from "@/stores/products";
import SideFilters from "./SideFilters.vue";
import { useProducts } from "@/composables/useProducts";
import SelectField from "./SelectField.vue";

const route = useRoute();
console.log(route.query);
const store = useProductsStore();

const curOpen = ref(null);

const filterData = [
  {
    id: 1,
    title: "Custom Menu",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 2,
    title: "Availability",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 3,
    title: "Price",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 4,
    title: "Color",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 5,
    title: "Size",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 6,
    title: "Product type",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 7,
    title: "Brand",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
  {
    id: 8,
    title: "Material",
    description:
      "To increase your transaction limits, you may need to provide additional verification documents such as your government ID or proof of address.",
  },
];

function updateGrid() {
  store.updateProductsPerRow(window.innerWidth < 768 ? 2 : 3);
}

onMounted(() => {
  updateGrid();
});

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Products",
  },
];

// This is for the breadcrumbs
const collection = computed(() => route.params.collection);

const {
  allProductsData,
  isFetchingAllProducts,
  page: pageVQ,
  url: urlVQ,
  allProductsError,
} = useProducts();

const visiblePages = computed(() => {
  const total = allProductsData.value?.last_page || 0;
  const current = pageVQ.value;
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages = [];
  pages.push(1);
  if (current > 4) {
    pages.push("...");
  }
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (current < total - 3) {
    pages.push("...");
  }
  if (total > 1) {
    pages.push(total);
  }
  return pages;
});

function handlePrev() {
  if (pageVQ.value === 1) return;
  urlVQ.value = allProductsData.value?.prev_page_url;
  pageVQ.value--;
  scrollToTop();
}

function handleNext() {
  if (allProductsData.value?.last_page === pageVQ.value) return;
  urlVQ.value = allProductsData.value?.next_page_url;
  pageVQ.value++;
  scrollToTop();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" :title="collection === 'all' ? 'products' : collection" />

  <!-- Shop page header -->
  <ShopPageHeader
    :from="allProductsData?.from"
    :to="allProductsData?.to"
    :total="allProductsData?.total"
  >
    <div v-if="allProductsData" class="hidden items-center gap-2 md:flex">
      <span>Show</span>
      <SelectField name="show" id="show" v-model="allProductsData.per_page">
        <option v-for="(_, i) in 10" :key="i" :value="i + 1">{{ i + 1 }}</option>
      </SelectField>
      <span class="hidden lg:block">per page</span>
    </div>
  </ShopPageHeader>

  <section
    class="mx-auto my-16.25 grid w-full max-w-container grid-cols-1 gap-x-7.5 px-3.75 md:my-17.5 md:px-7.5 lg:mt-20 lg:mb-25 lg:grid-cols-[270px_1fr]"
  >
    <!-- Sidebar filters -->
    <aside class="hidden space-y-10 lg:block">
      <SideFilters
        v-for="item in filterData"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :curOpen="curOpen"
        @update:curOpen="curOpen = $event"
      />
    </aside>

    <!-- Products -->
    <main>
      <!-- Skeletons -->
      <div
        v-if="isFetchingAllProducts"
        :class="`grid grid-cols-2 gap-6 md:grid-cols-${store.productsPerRow}`"
      >
        <ProductCardSkeleton v-for="n in 6" :key="n" />
      </div>

      <!-- Error -->
      <div v-else-if="allProductsError">Error: {{ allProductsError.message }}</div>

      <!-- Products -->
      <div
        v-else
        :class="[
          'grid gap-6 md:gap-7',
          store.productsPerRow === 4 ? 'md:grid-cols-4' : '',
          store.productsPerRow === 3 ? 'md:grid-cols-3' : '',
          store.productsPerRow === 2 ? 'grid-cols-2' : '',
          store.productsPerRow === 1 ? 'grid-cols-1' : '',
        ]"
      >
        <div v-for="product in allProductsData.data" :key="product.id">
          <ProductCard
            :product="product"
            class="transition-all transition-discrete duration-500"
            :imgContainerClass="
              // I tried the min and max width trick below to make all the image conts have the same width, and it works!
              store.productsPerRow === 1 ? 'md:min-w-[35%] md:max-w-[35%] md:pt-[47%]!' : ''
            "
          />
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-30 flex flex-wrap items-center justify-center gap-2 md:gap-6">
        <button
          :disabled="pageVQ === 1"
          class="pb-3 text-sm text-neutral-50 transition-all duration-300 ease-out hover:text-brand-primary disabled:cursor-not-allowed! disabled:opacity-50 disabled:hover:text-neutral-50 md:text-base"
          @click="handlePrev"
        >
          Prev
        </button>
        <!-- Make it show only a few numbers when they are more than 6 -->

        <template v-for="page in visiblePages" :key="page">
          <span
            v-if="page === '...'"
            class="border-b border-b-transparent px-1 pb-3 text-sm text-neutral-50 md:px-2 md:text-base"
          >
            ...
          </span>
          <button
            v-else
            class="border-b px-1 pb-3 text-sm transition-all duration-300 ease-out md:px-2 md:text-base"
            :class="
              page === pageVQ
                ? 'border-b-neutral-50 text-brand-primary'
                : 'border-b-transparent text-neutral-50'
            "
            @click="
              pageVQ = page;
              scrollToTop();
            "
          >
            {{ page }}
          </button>
        </template>
        <button
          :disabled="pageVQ === allProductsData?.last_page"
          class="pb-3 text-sm text-neutral-50 transition-all duration-300 ease-out hover:text-brand-primary disabled:cursor-not-allowed! disabled:opacity-50 disabled:hover:text-neutral-50 md:text-base"
          @click="handleNext"
        >
          Next
        </button>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped></style>
