import { signup as signupApi } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useSignup() {
  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  const { isPending: isSigningUp, mutate: signup } = useMutation({
    queryClient,
    mutationFn: signupApi,

    onSuccess: (data) => {
      authStore.setToken(data.token);
      authStore.setUser(data.user);
    },
  });

  return { isSigningUp, signup };
}
