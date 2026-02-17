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

const route = useRoute();
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

const { allProducts, isFetchingAllProducts } = useProducts();
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" :title="collection === 'all' ? 'products' : collection" />

  <!-- Shop page header -->
  <ShopPageHeader />

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
      <!-- <div v-else-if="error">Error: {{ error.message }}</div> -->

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
        <div v-for="product in allProducts" :key="product.id">
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
    </main>
  </section>
</template>

<style lang="scss" scoped></style>
