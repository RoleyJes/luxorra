import api from "./axios";

// export async function fetchAllProducts() {
//   // export async function fetchAllProducts({ per_page = 10 }) {
//   // const res = await api.get(`/products?per_page=${per_page}`);
//   const res = await api.get("/products?per_page=10&current_page=2");
//   return res.data;
// }
// export async function fetchAllProducts(url = null, page) {
//   if (url) {
//     const baseUrl = import.meta.env.VITE_API_BASE_URL;
//     const strippedUrl = url.replace(baseUrl, "");
//     console.log(strippedUrl);
//   }
//   // const res = await api.get(`/products?per_page=10&page=${page}`);
//   const res = await api.get(`/products?per_page=10&page=${page}`);
//   return res.data;
// }

export async function fetchAllProducts({ page, url = null, per_page = 10 }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const strippedUrl = url ? url.replace(baseUrl, "") : null;

  const urlToUse = strippedUrl || `/products?per_page=${per_page}&page=${page}`;
  // const res = await api.get(`/products?per_page=10&page=${page}`);
  const res = await api.get(urlToUse);
  return res.data;
}

export async function fetchProductsByTab(tab) {
  const res = await api.get(`/products?tab=${tab}&per_page=9`);
  return res.data.data;
}

export async function fetchSingleProduct(id) {
  const res = await api.get(`/products/${id}`);
  return res.data.data;
}
