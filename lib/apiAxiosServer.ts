import axios from "axios";
import { cookies } from "next/headers";
import { ApiError } from "./ApiError";

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
apiAxiosServer.interceptors.response.use(
  (response) => {
    // Si la petición sale bien, pasa los datos directamente
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 500;
      const data = error.response?.data;

      console.error("❌ Error API:", {
        status,
        data,
      });

      throw new ApiError(status, data);
    }

    throw error;
  },
);
