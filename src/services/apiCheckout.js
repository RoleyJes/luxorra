import api from "./axios";

export async function checkout(payload) {
  const res = await api.post("/orders/checkout", payload);
  return res.data;
}
