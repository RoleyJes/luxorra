<script setup>
import { computed, ref } from "vue"
import ProductCard from "@/ui/ProductCard.vue"
import ProductCardSkeleton from "@/ui/ProductCardSkeleton.vue"
import { useProducts } from "@/composables/useProducts"

const tabs = ref([
  { activeTab: "electronics", label: "New" },
  { activeTab: "jewelery", label: "Popular" },
  { activeTab: "women's clothing", label: "Sale" },
])

const activeTab = ref(tabs.value[0].activeTab)

const { isPending, data: products, error } = useProducts()

const filteredProducts = computed(() => {
  if (!products.value) return []
  return products.value.filter((p) => p.category === activeTab.value)
})

// ************ PINIA ****************
// const productsStore = useProductsStore()

// This is how we destructure reactive properties from Pinia stores. For actions, we can destructure them directly from the store.
// const { products, loading, error } = storeToRefs(productsStore)

// onMounted(() => {
//   productsStore.fetchProducts()
// })

// const filteredProducts = computed(() =>
//   products.value.filter((p) => p.category === activeTab.value),
// )
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

    <!-- Skeletons -->
    <div v-if="isPending" class="grid grid-cols-2 gap-6 lg:grid-cols-3">
      <ProductCardSkeleton v-for="n in 6" :key="n" />
    </div>

    <!-- Error -->
    <div v-else-if="error">Error: {{ error.message }}</div>

    <!-- Products -->
    <div v-else class="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard
          :product="product"
          :class="[
            'transition-all transition-discrete duration-500', // temporary stuff
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
