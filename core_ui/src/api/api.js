// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:18080/v1",
});

// Add JWT automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const apiGet = (url) => API.get(url).then((r) => r.data);
export const apiPost = (url, data) => API.post(url, data).then((r) => r.data);
export const apiPut = (url, data) => API.put(url, data).then((r) => r.data);
export const apiDelete = (url) => API.delete(url).then((r) => r.data);
