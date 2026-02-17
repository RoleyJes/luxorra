import { logout as logoutApi } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useRouter } from "vue-router";

export function useLogout() {
  const router = useRouter();
  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      authStore.clearToken();
      router.push({ name: "login" });
    },
  });

  return { logout };
}
