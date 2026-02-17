import api from "./axios";

export async function getCart() {
  const res = await api.get("/cart");
  return res.data.data;
}

export async function addToCart(payload) {
  const res = await api.post("/cart/add", payload);

  // I'm returning res.data instead of res.data.data because I need the message prop from the whole data sent from the backend not just the main data that's the actual array of cart items
  return res.data;
}

export async function deleteFromCart(id) {
  const res = await api.delete(`/cart/${id}`);
  return res.data;
}

export async function updateCart({ id, type }) {
  // Always remember that mutation fns accept only 1 argument! If you have multiple arguments, pass them in as a single object. I'm doing this here because i'm handling this request with VQ.
  const res = await api.put(`/cart/${id}`, { type });
  return res.data;
}

export async function clearCart() {
  const res = await api.delete("/cart/all");
  return res.data;
}
