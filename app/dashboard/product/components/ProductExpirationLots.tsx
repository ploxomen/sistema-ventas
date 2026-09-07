import SubTitleCard from "@/components/dashboard/SubTitleCard";
import { ContentBox } from "@/components/setting-option";
import { Button, Card, CardHeader } from "@heroui/react";
import { Package, Plus, Trash2 } from "lucide-react";
import React from "react";
import { ProductLot } from "../types/product";
import { CardContent } from "@/components/ui/card";
import InputCustom from "@/components/ui/input-custom";

interface Props {
  lots: ProductLot[];
  onAdd: () => void;
  onUpdate : <K extends keyof ProductLot>(index : number, field : K, value : ProductLot[K]) => void,
  onRemove : (index : number) => void
}
export default function ProductExpirationLots({ lots, onAdd, onUpdate, onRemove}: Props) {
  return (
    <Card className="pb-5 mb-5">
      <CardHeader>
        <ContentBox className="flex w-full items-center">
          <SubTitleCard
            title="Lotes y vencimientos"
            icon={Package}
            description="Registra el stock según su lote y fecha de vencimiento."
            className="flex-1"
          />
          <Button
            color="primary"
            startContent={<Plus size={18} />}
            onPress={onAdd}
          >
            Agregar lote
          </Button>
        </ContentBox>
      </CardHeader>
      <CardContent>
        {lots.length === 0 && (
          <div className="rounded-xl border border-dashed p-8 text-center">
            <p className="text-sm text-default-500">
              No hay lotes registrados.
            </p>
          </div>
        )}
        <div className="space-y-3">
        {lots.map((lot, index) => (
          <div
            key={index}
            className="
              grid
              grid-cols-1
              gap-3
              rounded-xl
              border
              border-default-200
              p-4
              md:grid-cols-[1fr_1fr_1fr_auto]
            "
          >

            <InputCustom
              label="Número de lote"
              placeholder="Ej. LT-2026-001"
              value={lot.lotNumber ?? ""}
              onValueChange={(value) =>
                onUpdate(
                  index,
                  "lotNumber",
                  value
                )
              }
            />

            <InputCustom
              type="number"
              label="Cantidad"
              placeholder="0"
              value={String(lot.quantity)}
              onValueChange={(value) =>
                onUpdate(
                  index,
                  "quantity",
                  Number(value)
                )
              }
            />

            <InputCustom
              type="date"
              label="Fecha de vencimiento"
              value={lot.expirationDate ?? ""}
              onValueChange={(value) =>
                onUpdate(
                  index,
                  "expirationDate",
                  value
                )
              }
            />

            <Button
              isIconOnly
              color="danger"
              variant="light"
              className="self-center"
              onPress={() =>
                onRemove(index)
              }
            >
              <Trash2 size={18} />
            </Button>

          </div>
        ))}
        </div>
      </CardContent>
    </Card>
  );
}
