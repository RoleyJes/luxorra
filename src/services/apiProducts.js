import api from "./axios";

export async function fetchAllProducts() {
  const res = await api.get("/products");
  return res.data.data;
}

export async function fetchProductsByTab(tab) {
  const res = await api.get(`/products?tab=${tab}&per_page=9`);
  return res.data.data;
}
