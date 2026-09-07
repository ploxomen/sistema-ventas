import SubTitleCard from "@/components/dashboard/SubTitleCard";
import { ContentBox } from "@/components/setting-option";
import { CardContent } from "@/components/ui/card";
import InputCustom from "@/components/ui/input-custom";
import { Card, CardHeader, Switch } from "@heroui/react";
import { DollarSignIcon } from "lucide-react";
import React from "react";
import { ProductFormData } from "../types/product";
import { PropsForm } from "@/types/global";
type PropProductPricingType = Pick<
  ProductFormData,
  | "purchasePrice"
  | "salePrice"
  | "wholesalePrice"
  | "initialStock"
  | "hasExpiration"
>;

type Props = PropsForm<PropProductPricingType>;

export default function ProductPricing({
  onChange,
  salePrice,
  purchasePrice,
  initialStock,
  wholesalePrice,
  hasExpiration,
}: Props) {
  return (
    <Card className="gap-1 pb-5">
      <CardHeader>
        <SubTitleCard
          title="Precios"
          icon={DollarSignIcon}
          description="Configura los precios comerciales."
        />
      </CardHeader>
      <CardContent>
        <ContentBox className="grid grid-cols-12 gap-2">
          <InputCustom
            label="Stock inicial"
            type="number"
            value={String(initialStock)}
            onValueChange={(value) => onChange("initialStock", Number(value))}
            isRequired
            className="col-span-full md:col-span-6"
          />
          <InputCustom
            label="Precio de compra"
            step="0.01"
            type="number"
            startContent={
              <span className="text-small text-default-400">S/</span>
            }
            value={String(purchasePrice)}
            onValueChange={(value) => onChange("purchasePrice", Number(value))}
            isRequired
            className="col-span-full md:col-span-6"
          />
          <InputCustom
            label="Precio de venta"
            step="0.01"
            type="number"
            startContent={
              <span className="text-small text-default-400">S/</span>
            }
            value={String(salePrice)}
            onValueChange={(value) => onChange("salePrice", Number(value))}
            isRequired
            className="col-span-full md:col-span-6"
          />
          <InputCustom
            label="Precio por mayor"
            step="0.01"
            type="number"
            startContent={
              <span className="text-small text-default-400">S/</span>
            }
            value={String(wholesalePrice)}
            onValueChange={(value) => onChange("wholesalePrice", Number(value))}
            className="col-span-full md:col-span-6"
          />
          <ContentBox className="col-span-full">
            <Switch
              isSelected={hasExpiration}
              size="sm"
              onValueChange={(value: boolean) =>
                onChange("hasExpiration", value)
              }
            >
              Asignar lotes de vencimientos
            </Switch>
          </ContentBox>
        </ContentBox>
      </CardContent>
    </Card>
  );
}
