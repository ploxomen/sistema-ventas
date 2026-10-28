import { useState, useMemo, useEffect } from "react";
import type { Category, SubCategory } from "@/types/category";
import { getCategories } from "@/service/product.service";
interface Props {
  idCategory?: number;
}
export const useCategoryData = ({ idCategory }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const subcategories = useMemo(() => {
    if (!categories.length) {
      return [];
    }
    if (idCategory === 0) {
      return categories.flatMap((cat) => cat.subCategories || []);
    }
    return categories.find((cat) => cat.id == idCategory)?.subCategories || [];
  }, [idCategory, categories]);
  const onCategory = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  useEffect(() => {
    onCategory();
  }, []);

  return {
    subcategories,
    categories,
  };
};
