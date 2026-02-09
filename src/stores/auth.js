import api from "@/services/axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("authToken") || null);

  const user = ref(JSON.parse(localStorage.getItem("authUser")) || null);

  const setToken = (authToken) => {
    token.value = authToken;
    localStorage.setItem("authToken", authToken);
  };

  const clearToken = () => {
    token.value = null;
    localStorage.removeItem("authToken");
  };

  const setUser = (userData) => {
    user.value = userData;
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const clearUser = () => {
    user.value = null;
    localStorage.removeItem("authUser");
  };

  const isAuthenticated = computed(() => token.value !== null);

  async function login(credentials) {
    try {
      const res = await api.post("/login", credentials);
      console.log(res);
      setToken(res.data.data.token);
      setUser(res.data.data.user);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const logout = () => {
    clearToken();
    clearUser();
  };

  return { token, user, login, logout, isAuthenticated, setToken, setUser, clearUser };
});
