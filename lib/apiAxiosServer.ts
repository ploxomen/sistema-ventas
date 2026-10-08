import axios from "axios";
import { cookies } from "next/headers";

export const apiAxiosServer = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
apiAxiosServer.interceptors.request.use(async (config) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch {
    // Si se invoca en un contexto fuera de request handler, no hace nada
  }
  return config;
});
