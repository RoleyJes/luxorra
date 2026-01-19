import { ref } from "vue"
import { defineStore } from "pinia"

export const useProductsStore = defineStore("products", () => {
  const products = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    try {
      loading.value = true

      const res = await fetch("https://fakestoreapi.com/products")
      if (!res.ok) throw new Error("Failed to fetch products")

      products.value = await res.json()
    } catch (err) {
      error.value = err.message || "Something went wrong fetching products"
    } finally {
      loading.value = false
    }
  }

  return { products, fetchProducts, loading, error }
})
