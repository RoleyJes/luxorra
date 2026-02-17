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

export async function login(data) {
  const res = await api.post("/login", data);
  return res.data;
}

export async function getUser() {
  const res = await api.get("/user");
  return res.data;
}

export async function logout() {
  const res = await api.post("/logout");
  console.log(res.data);
  return res.data;
}
