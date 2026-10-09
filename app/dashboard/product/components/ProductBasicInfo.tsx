"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Apple } from "lucide-react";
import InputCustom from "@/components/ui/input-custom";
import { ContentBox } from "@/components/setting-option";
import { MyAutocomplete } from "@/components/ui/autocomplete-custom";
import TextareaCustom from "@/components/ui/textarea-custom";
import SubTitleCard from "@/components/dashboard/SubTitleCard";
import { ProductFormData } from "../types/product";
import { PropsForm } from "@/types/global";
import { Category, SubCategory } from "@/types/category";
import { Brand } from "@/types/brand";
import { useMemo } from "react";

export type ProductBasicInfoType = Pick<
  ProductFormData,
  "name" | "categoryId" | "subcategoryId" | "brandId" | "model" | "description"
>;
type Props = PropsForm<
  ProductBasicInfoType & { categories: Category[]; brands: Brand[] }
>;

export default function ProductBasicInfo({
  brandId,
  categoryId,
  categories,
  brands,
  model,
  description,
  name,
  onChange,
  subcategoryId,
}: Props) {
  const subcategories: SubCategory[] = useMemo(() => {
    return categories.find((cat) => cat.id === categoryId)?.subCategories || [];
  }, [categories, categoryId]);
  return (
    <Card className="gap-1 mb-5">
      <CardHeader>
        <SubTitleCard
          title="Datos generales"
          icon={Apple}
          description="Establece el nombre, categoria, modelo, descripción e imágenes"
        />
      </CardHeader>
      <CardContent>
        <ContentBox className="grid grid-cols-12 gap-2">
          <InputCustom
            label="Producto"
            value={name}
            onValueChange={(value) => onChange("name", value)}
            isRequired
            className="col-span-full"
          />
          <MyAutocomplete
            label="Categoría"
            className="col-span-3"
            isRequired
            value={categoryId !== null ? String(categoryId) : ""}
            onSelectionChange={(key) => {
              onChange("categoryId", key ? Number(key) : null);
            }}
            items={categories.map((val) => ({
              value: val.id.toString(),
              label: val.name,
            }))}
          />
          <MyAutocomplete
            label="Subcategoría"
            className="col-span-3"
            value={subcategoryId !== null ? String(subcategoryId) : ""}
            onSelectionChange={(key) => onChange("subcategoryId", Number(key))}
            isRequired
            items={subcategories.map((sub) => ({
              value: sub.id!.toString(),
              label: sub.name,
            }))}
          />
          <MyAutocomplete
            label="Marca"
            className="col-span-3"
            value={brandId !== null ? String(brandId) : ""}
            onSelectionChange={(key) => onChange("brandId", Number(key))}
            isRequired
            items={brands.map((val) => ({
              value: val.id.toString(),
              label: val.name,
            }))}
          />
          <InputCustom
            label="Modelo"
            value={model}
            onValueChange={(value) => onChange("model", value)}
            className="col-span-3"
          />
          <TextareaCustom
            label="Detalle"
            value={description}
            onValueChange={(value) => onChange("description", value)}
            className="col-span-full"
          />
        </ContentBox>
      </CardContent>
    </Card>
  );
}
