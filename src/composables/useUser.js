import { getUser } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

export function useUser(options = {}) {
  const authStore = useAuthStore();

  const enabled = computed(() => {
    const authEnabled = authStore.isAuthenticated;
    if (options.enabled) {
      return authEnabled && options.enabled.value;
    }
    return authEnabled;
  });

  const { isPending: isFetchingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled,
  });

  return { user, isFetchingUser };
}
