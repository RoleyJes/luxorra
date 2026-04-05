import { signup as signupApi } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
import toast from "vue3-hot-toast";

export function useSignup() {
  const router = useRouter();
  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  const { isPending: isSigningUp, mutate: signup } = useMutation({
    mutationFn: signupApi,

    onSuccess: (data) => {
      authStore.setToken(data.token);
      toast.success("You've successfully registered");

      // At the time of writing this, I haven't created a user queryData. Ensure to do that (done in useUser.js)
      queryClient.setQueryData(["user"], data.user);
      router.push("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isSigningUp, signup };
}
