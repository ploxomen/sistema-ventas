import { Button, Chip } from "@heroui/react";
import { Edit, Trash2 } from "lucide-react";
import type { TableColumn } from "@/types/table";
import { Brand } from "@/types/brand";

interface BrandColumnAction {
  onEdit : (idBrand : number) => void;
  onDelete : (idBrand: number) => void;
}

export function createBrandColumn({
  onEdit,
  onDelete,
}: BrandColumnAction): TableColumn<Brand>[] {
  return [
    {
      key: "name",
      label: "NOMBRE",
      sortable: true,

      render: (brand) => (
        <div>
          <p className="font-medium">{brand.name}</p>
        </div>
      ),
    },
    {
      key: "actions",
      label: "ACCIONES",
      align: "end",

      render: (brand) => (
        <div className="flex justify-end gap-1">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={() => onEdit(brand.id)}
          >
            <Edit size={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            color="danger"
            variant="light"
            onPress={() => onDelete(brand.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ),
    },
  ];
}
