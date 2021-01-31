import axiosInstance from "./axios";

const login = (data) =>
  axiosInstance.post("/api/login/", data);

export { login };
