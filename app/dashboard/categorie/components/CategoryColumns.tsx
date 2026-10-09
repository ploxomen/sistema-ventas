import { Button, Chip } from "@heroui/react";
import { Edit, Trash2 } from "lucide-react";
import type { TableColumn } from "@/types/table";
import type { Category } from "@/types/category";

interface CategoryColumnActions {
  onEdit ?: (idCategory : number) => void;
  onDelete ?: (idCategory: number) => void;
}

export function createCategoryColumns({
  onEdit = () => {},
  onDelete = () => {},
}: CategoryColumnActions): TableColumn<Category>[] {
  return [
    {
      key: "name",
      label: "NOMBRE",
      sortable: true,

      render: (category) => (
        <div>
          <p className="font-medium">{category.name}</p>
        </div>
      ),
    },

    {
      key: "subcategories",
      label: "SUBCATEGORÍAS",

      render: (category) => (
        <Chip size="sm" variant="flat">
          {category?.subCategories?.length} subcategorías
        </Chip>
      ),
    },

    {
      key: "actions",
      label: "ACCIONES",
      align: "end",

      render: (category) => (
        <div className="flex justify-end gap-1">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={() => onEdit(category.id)}
          >
            <Edit size={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            color="danger"
            variant="light"
            onPress={() => onDelete(category.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ),
    },
  ];
}
