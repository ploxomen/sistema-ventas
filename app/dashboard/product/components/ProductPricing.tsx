import SubTitleCard from "@/components/dashboard/SubTitleCard";
import { ContentBox } from "@/components/setting-option";
import { CardContent } from "@/components/ui/card";
import InputCustom from "@/components/ui/input-custom";
import { Card, CardHeader } from "@heroui/react";
import { DollarSignIcon } from "lucide-react";
import React from "react";
import { ProductFormData } from "../types/product";
import { PropsForm } from "@/types/global";
type PropProductPricingType = Pick<ProductFormData, "purchasePrice" | "salePrice" | "wholesalePrice">

type Props = PropsForm<PropProductPricingType>;

export default function ProductPricing({onChange, salePrice, purchasePrice, wholesalePrice} : Props) {
  return (
    <Card className="gap-1 mb-5">
      <CardHeader>
        <SubTitleCard
          title="Precios"
          icon={DollarSignIcon}
          description="Establece el nombre, categoria, modelo, descripción e imágenes"
        />
      </CardHeader>
      <CardContent>
        <ContentBox className="grid grid-cols-12 gap-2">
        <InputCustom
          label="Precio de compra"
          type="number"
          startContent={<span className="text-small text-default-400">S/</span>}
          value={String(purchasePrice)}
          onValueChange={(value) => onChange("purchasePrice", Number(value))}
          isRequired
          className="col-span-full md:col-span-6 lg:col-span-4"
        />
        <InputCustom
          label="Precio de venta"
          type="number"
          startContent={<span className="text-small text-default-400">S/</span>}
          value={String(salePrice)}
          onValueChange={(value) => onChange("salePrice", Number(value))}
          isRequired
          className="col-span-full md:col-span-6 lg:col-span-4"
        />
        <InputCustom
          label="Precio por mayor"
          type="number"
          startContent={<span className="text-small text-default-400">S/</span>}
          value={String(wholesalePrice)}
          onValueChange={(value) => onChange("wholesalePrice", Number(value))}
          isRequired
          className="col-span-full md:col-span-6 lg:col-span-4"
        />
        </ContentBox>
      </CardContent>
    </Card>
  );
}
