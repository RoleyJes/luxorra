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
      // This is for directly setting the query with the key "user" to the returnded data. This is different from invalidateQuries becuase it doesn't refetch, it just sets the query's data to this one so it doesn't have to refetch and every component using the "user" query gets updated instantly.
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
