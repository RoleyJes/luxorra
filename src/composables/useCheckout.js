import { checkout as checkoutApi } from "@/services/apiCheckout";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
import toast from "vue3-hot-toast";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { isPending: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: checkoutApi,

    onSuccess(data) {
      toast.success(data.message || "Checkout successful");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setTimeout(() => {
        router.push({ name: "home" });
      }, 1500);
    },

    onError(err) {
      toast.error(err.message || "Checkout failed");
    },
  });

  return {
    isCheckingOut,
    checkout,
  };
}
