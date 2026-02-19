import api from "./axios";

export async function getOrders() {
  const res = await api.get("/orders");
  return res.data.data;
}
