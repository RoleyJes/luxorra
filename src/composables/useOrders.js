import { getOrders } from "@/services/apiOrders";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

export default function useOrders() {
  const { data: orders, isPending: isFetchingOrders } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  // computed orders length
  const ordersLength = computed(() => orders.value?.length ?? 0);

  return { orders, isFetchingOrders, ordersLength };
}
