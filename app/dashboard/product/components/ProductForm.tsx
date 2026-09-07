"use client";
import { ContentBox } from "@/components/setting-option";
import { useProductForm } from "../hooks/useProductForm";
import {
  Brand,
  Category,
  ProductFormData,
  Subcategory,
} from "../types/product";
import ProductBasicInfo from "./ProductBasicInfo";
import ProductImages from "./ProductImages";
import ProductPricing from "./ProductPricing";
import ProductExpirationLots from "./ProductExpirationLots";
import { Button } from "@heroui/react";
import { Save } from "lucide-react";
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
  onCancel,
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
  const isEditing = Boolean(form.id);
  const stockMismatch =
    form.hasExpiration && totalLotStock !== form.initialStock;
  const handleSubmit = async () => {
    await onSubmit(form);
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
        onChange={(field, value) =>
          updateField(
            field as keyof ProductFormData,
            value as ProductFormData[keyof ProductFormData],
          )
        }
      />
      <ContentBox className="flex gap-5 mb-5 ">
        <ProductPricing
          salePrice={form.salePrice}
          initialStock={form.initialStock}
          hasExpiration={form.hasExpiration}
          wholesalePrice={form.wholesalePrice}
          purchasePrice={form.purchasePrice}
          onChange={(field, value) =>
            updateField(
              field as keyof ProductFormData,
              value as ProductFormData[keyof ProductFormData],
            )
          }
        />
        <ProductImages
          images={form.images}
          onAdd={addImages}
          onRemove={removeImage}
          onPrimary={setPrimaryImage}
        />
      </ContentBox>
      {form.hasExpiration && (
        <ProductExpirationLots
          lots={form.lots}
          onAdd={addLot}
          onUpdate={updateLot}
          onRemove={removeLot}
        />
      )}
      {stockMismatch && (
        <div className="rounded-xl bg-warning-50 p-4 text-sm text-warning-700">
          El stock inicial no coincide con la cantidad asignada a los lotes.
          <strong className="ml-1">
            Stock:
            {form.initialStock}
            {" / "}
            Lotes:
            {totalLotStock}
          </strong>
        </div>
      )}
      <ContentBox className="flex justify-end gap-3 pb-8">
        <Button
          color="primary"
          startContent={<Save size={18} />}
          isDisabled={stockMismatch}
          onPress={handleSubmit}
        >
          {isEditing ? "Guardar cambios" : "Crear producto"}
        </Button>
        {onCancel && (
          <Button variant="flat" onPress={onCancel}>
            Cancelar
          </Button>
        )}
      </ContentBox>
    </form>
  );
}
