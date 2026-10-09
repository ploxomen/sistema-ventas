import { apiAxios } from "@/lib/apiAxios";
export const getCategories = async () => {
  const response = await apiAxios.get("categories", {
    params: {
      page: 0,
      limit: 0,
    },
  });
  return response.data;
};
export const getBrands = async () => {
  const response = await apiAxios.get("brands", {
    params: {
      page: 0,
      limit: 0,
    },
  });
  return response.data;
};
