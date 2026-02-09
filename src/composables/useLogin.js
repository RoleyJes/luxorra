import { login as loginApi } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
import toast from "vue3-hot-toast";

export function useLogin() {
  const router = useRouter();
  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      authStore.setToken(data.token);
      router.push({ name: "account" });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoggingIn, login };
}
