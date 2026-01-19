<template>
  <section class="mx-auto mt-14 w-full max-w-container px-4 md:px-10 lg:mt-22 xl:px-3.75">
    <!-- Tabs -->
    <div class="mb-12.5 flex items-center justify-center gap-8">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        class="cursor-pointer text-[22px] leading-[1.2] text-[#cccccc] transition-all duration-300 hover:text-brand-primary sm:text-4xl md:text-5xl"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="loading">Fetching products...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useProductsStore } from "@/stores/products"
import ProductCard from "@/ui/ProductCard.vue"
import { storeToRefs } from "pinia"

const tabs = ref([{ label: "New" }, { label: "Popular" }, { label: "Sale" }])

const productsStore = useProductsStore()

// This is how we destructure reactive properties from Pinia stores. For actions, we can destructure them directly from the store.
const { products, loading, error } = storeToRefs(productsStore)

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<style lang="scss" scoped></style>
