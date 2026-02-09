import api from "./axios";

export async function signup(data) {
  // I don't need try catch block because TQ will handle success and error. Ensure that i'm returning the data though
  // try {
  const res = await api.post("/register", data);
  return res.data;
  // } catch (error) {
  //   console.error("Error signing up:", error);
  //   throw error;
  // }
}
