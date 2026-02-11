import { addToCart as addToCartApi, getCart } from "@/services/apiCart";
import { useAuthStore } from "@/stores/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed } from "vue";
import toast from "vue3-hot-toast";

export default function useCart() {
  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  // Fetch cart
  const { isPending: isFetchingCart, data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: authStore.isAuthenticated,
  });

  // Computed total amt
  const totalAmt = computed(() =>
    cartData.value.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0),
  );

  // Computed cart length
  const cartLength = computed(() => cartData.value?.length ?? 0);

  // Add to cart
  const { isPending: isAddingToCart, mutate: addToCart } = useMutation({
    mutationFn: addToCartApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      console.log(cartData.value.length);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isFetchingCart, cartData, cartLength, isAddingToCart, addToCart, totalAmt };
}
