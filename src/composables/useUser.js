import { getUser } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

export function useUser() {
  const authStore = useAuthStore();

  const { isPending: isFetchingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: computed(() => authStore.isAuthenticated),
  });

  return { user, isFetchingUser };
}
