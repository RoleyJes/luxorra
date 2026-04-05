import { defineStore } from "pinia";
import { computed, ref } from "vue";

const parseJwt = (token) => {
  try {
    const [, payload] = token.split(".");
    if (!payload) return null;
    const decoded = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
    return decoded;
  } catch {
    return null;
  }
};

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("authToken") || null);

  const setToken = (authToken) => {
    token.value = authToken;
    localStorage.setItem("authToken", authToken);
  };

  const clearToken = () => {
    token.value = null;
    localStorage.removeItem("authToken");
  };

  const isTokenExpired = (authToken = token.value) => {
    if (!authToken) return true;
    const jwt = parseJwt(authToken);
    if (!jwt?.exp) return false;
    return Date.now() >= jwt.exp * 1000;
  };

  const isAuthenticated = computed(() => token.value !== null && !isTokenExpired());

  return {
    token,
    clearToken,
    isAuthenticated,
    isTokenExpired,
    setToken,
  };
});
