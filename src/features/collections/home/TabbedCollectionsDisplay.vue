<script setup>
import { computed, onMounted, ref } from "vue"
import { useProductsStore } from "@/stores/products"
import ProductCard from "@/ui/ProductCard.vue"
import { storeToRefs } from "pinia"

const tabs = ref([
  { activeTab: "electronics", label: "New" },
  { activeTab: "jewelery", label: "Popular" },
  { activeTab: "women's clothing", label: "Sale" },
])

const activeTab = ref(tabs.value[0].activeTab)
const productsStore = useProductsStore()

// This is how we destructure reactive properties from Pinia stores. For actions, we can destructure them directly from the store.
const { products, loading, error } = storeToRefs(productsStore)

onMounted(() => {
  productsStore.fetchProducts()
})

const filteredProducts = computed(() =>
  products.value.filter((p) => p.category === activeTab.value),
)
console.log(filteredProducts.value)
</script>

<template>
  <section class="mx-auto mt-14 w-full max-w-container px-4 md:px-10 lg:mt-22 xl:px-3.75">
    <!-- Tabs -->
    <div class="mb-12.5 flex items-center justify-center gap-8">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        @click="activeTab = tab.activeTab"
        :class="[
          'cursor-pointer text-[22px] leading-[1.2] transition-all duration-300 hover:text-brand-primary sm:text-4xl md:text-5xl',
          activeTab === tab.activeTab ? 'text-brand-primary' : 'text-[#cccccc]',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="loading">Fetching products...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard
          :product="product"
          :class="[
            'transition-all duration-500',
            activeTab === product.category ? 'opacity-100' : 'opacity-0',
          ]"
        />
      </div>
    </div>
    <!-- <TransitionGroup
      v-else
      name="fade"
      tag="div"
      class="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
    >
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </TransitionGroup> -->
  </section>
</template>

<style lang="css" scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
