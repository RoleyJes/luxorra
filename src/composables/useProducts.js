import { fetchProducts } from "@/services/apiProducts"
import { useQuery } from "@tanstack/vue-query"

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })
}
