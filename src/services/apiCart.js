import api from "./axios";

export async function getCart() {
  const res = await api.get("/cart");
  console.log("cart: ", res.data.data);
  return res.data.data;
}

export async function addToCart(payload) {
  const res = await api.post("/cart/add", payload);
  console.log("add to cart: ", res.data);

  // I'm returning res.data instead of res.data.data because I need the message prop from the whole data sent from the backend not just the main data that's the actual array of cart items
  return res.data;
}
