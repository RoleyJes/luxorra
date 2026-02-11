import api from "./axios";

export async function fetchProducts() {
  // const res = await fetch("https://fakestoreapi.com/products")
  // if (!res.ok) {
  //   throw new Error("Failed to fetch products")
  // }
  // return res.json()

  // try {
  const res = await api.get("/products");
  return res.data.data;
  // } catch (error) {
  //   console.error("Error fetching products:", error);
  //   throw error;
  // }
}
