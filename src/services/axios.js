import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// api.interceptors.request.use(config => {
//     const authStore = useAuthStore()
//     if (authStore.token) {
//         config.headers.Authorization = `Bearer ${authStore.token}`
//     }
//     return config
// })

// This is so TQ can return the actual error from the server instead of a generic axios error.
// I would have done this "err.response.data.message" in my mutationFn if i didn't intercept the response below because that's how axios wraps the response from the server

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const message = error.response?.data?.message || "Unexpected error";

    return Promise.reject(new Error(message));
  },
);

export default api;
