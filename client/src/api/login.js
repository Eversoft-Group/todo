import axiosInstance from "./axios";

const login = (username, password) =>
  axiosInstance.post("/api/logoin", { username, password });

export { login };
