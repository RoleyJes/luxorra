import { checkout as checkoutApi } from "@/services/apiCheckout";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
import toast from "vue3-hot-toast";
import useCart from "./useCart";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { cartData, totalAmt } = useCart();

  const { isPending: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: checkoutApi,

    onSuccess(data) {
      toast.success(data.message || "Checkout successful");

      // Get form data from localStorage
      const formData = localStorage.getItem("checkoutFormData");
      const parsedFormData = formData ? JSON.parse(formData) : {};

      // Store complete order data for the success page
      const orderData = {
        items: cartData.value || [],
        total: totalAmt.value || 0,
        ...parsedFormData,
      };
      localStorage.setItem("lastOrderData", JSON.stringify(orderData));

      // Clean up form data
      localStorage.removeItem("checkoutFormData");

      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setTimeout(() => {
        router.push({ name: "order-success" });
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
