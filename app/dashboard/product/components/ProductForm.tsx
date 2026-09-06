"use client";

import { useProductForm } from "../hooks/useProductForm";
import {
  Brand,
  Category,
  ProductFormData,
  Subcategory,
} from "../types/product";
import ProductBasicInfo, { ProductBasicInfoType } from "./ProductBasicInfo";
import ProductPricing from "./ProductPricing";
interface Props {
  initialData: Partial<ProductFormData>;
  categories: Category[];
  subcategories: Subcategory[];
  brands: Brand[];
  onSubmit: (data: ProductFormData) => Promise<void>;
  onCancel?: () => void;
}
export default function ProductForm({
  initialData,
  categories,
  subcategories,
  onSubmit,
}: Props) {
  const {
    form,
    updateField,
    addImages,
    removeImage,
    setPrimaryImage,
    addLot,
    updateLot,
    removeLot,
    totalLotStock,
  } = useProductForm(initialData);
  const basicChange = <K extends keyof ProductBasicInfoType>(
    field: K,
    value: ProductBasicInfoType[K],
  ) => {
    updateField(
      field as keyof ProductFormData,
      value as ProductFormData[keyof ProductFormData],
    );
  };

  return (
    <form>
      <ProductBasicInfo
        name={form.name}
        description={form.description}
        model={form.model}
        brandId={form.brandId}
        categoryId={form.categoryId}
        subcategoryId={form.subcategoryId}
        onChange={basicChange}
      />
      <ProductPricing
        salePrice={form.salePrice}
        wholesalePrice={form.wholesalePrice}
        purchasePrice={form.purchasePrice}
        onChange={(field, value) => updateField(field, value)}
      />
    </form>
  );
}
