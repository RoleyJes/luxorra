import {
  addToCart as addToCartApi,
  clearCart as clearCartApi,
  deleteFromCart as deleteFromCartApi,
  getCart,
  updateCart as updateCartApi,
} from "@/services/apiCart";
import { useAuthStore } from "@/stores/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import toast from "vue3-hot-toast";

export default function useCart() {
  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  // These are for determining the particular item being deleted or updated so the btns can be disabled
  const deletingId = ref(null);
  const updatingId = ref(null);

  // Fetch cart
  const {
    isPending: isFetchingCart,
    data: cartData,
    error: fetchCartError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: authStore.isAuthenticated,
  });

  // Add to cart
  const { isPending: isAddingToCart, mutate: addToCart } = useMutation({
    mutationFn: addToCartApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // Delete from cart (The isDeleting is for the offCanvas btn that doesn't need a disabled state)
  const { isPending: isDeleting, mutate: deleteFromCart } = useMutation({
    mutationFn: deleteFromCartApi,
    onMutate: (id) => {
      deletingId.value = id;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
    onSettled: () => {
      deletingId.value = null;
    },
  });

  // Update cart
  const { mutate: updateCart } = useMutation({
    mutationFn: updateCartApi,
    onMutate: ({ id }) => {
      updatingId.value = id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
    onSettled: () => {
      updatingId.value = null;
    },
  });

  // Clear cart
  const { mutate: clearCart, isPending: isClearingCart } = useMutation({
    mutationFn: clearCartApi,
    onSuccess: () => {
      console.log("cleared");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Computed total amt
  const totalAmt = computed(() =>
    cartData.value.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0),
  );

  // Computed cart length
  const cartLength = computed(() => cartData.value?.length ?? 0);

  return {
    isFetchingCart,
    fetchCartError,
    cartData,
    cartLength,
    isAddingToCart,
    addToCart,
    totalAmt,
    deleteFromCart,
    deletingId,
    isDeleting,
    updatingId,
    updateCart,
    clearCart,
    isClearingCart,
  };
}
