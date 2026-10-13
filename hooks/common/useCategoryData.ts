import { useState, useMemo, useEffect } from "react";
import type { Category, SubCategory } from "@/types/category"
import { getCategories } from "@/service/product.service";
interface Props {
    idCategory ?: number | null
}
export const useCategoryData = ({
    idCategory
} : Props) => {
    const [categories, setCategories] = useState<Category>([]);
    const subcategories = useMemo(() => {
        if(!idCategory){
            return [];
        }
        return categories.find(cat => cat.id == idCategory).subCategories || [];

    },[idCategory, categories])
    const onCategory = async () => {
        const response = await getCategories();
        setCategories(response.data);
    }

    useEffect(() => {
        onCategory();
    },[]);

    return {
        subcategories,
        categories
    }
}