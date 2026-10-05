import { addToast } from "@heroui/react";
import axios from "axios";
export const apiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
apiAxios.interceptors.response.use(
  (response) => {
    if (
      ["post", "put", "patch", "delete"].includes(
        response.config.method?.toLowerCase() || "",
      )
    ) {
      addToast({
        title: "Éxito",
        description:
          response.data?.message || "Operación realizada correctamente.",
        color: "success",
      });
    }
    return response;
  },
  (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Ocurrió un error inesperado.";

    addToast({
      title: "Error",
      description: errorMessage,
      color: "danger",
    });

    return Promise.reject(error);
  },
);
