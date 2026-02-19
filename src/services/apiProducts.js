import api from "./axios";

export async function fetchAllProducts({ per_page = 10 }) {
  const res = await api.get(`/products?per_page=${per_page}`);
  // const res = await api.get("/products?per_page=30&current_page=2");
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
