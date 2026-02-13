import { fetchAllProducts, fetchProductsByTab } from "@/services/apiProducts";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

export function useProducts() {
  const tab = ref("new");
  // Fetch all products
  const { isPending: isFetchingAllProducts, data: allProducts } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  // Fetch products by tab
  const { isPending: isFetchingByTab, data: tabbedProducts } = useQuery({
    queryKey: ["products", tab],
    queryFn: () => fetchProductsByTab(tab.value),
  });

  return { isFetchingAllProducts, tab, allProducts, isFetchingByTab, tabbedProducts };
}
