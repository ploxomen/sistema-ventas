import { Button, Chip } from "@heroui/react";

import { Edit, Plus, Trash2 } from "lucide-react";

import type { TableColumn } from "@/types/table";

import type { Category } from "@/types/category";

interface CategoryColumnActions {
  onEdit ?: (category: Category) => void;

  onCreateSubcategory ?: (category: Category) => void;

  onDelete ?: (category: Category) => void;
}

export function createCategoryColumns({
  onEdit,
  onCreateSubcategory,
  onDelete,
}: CategoryColumnActions): TableColumn<Category>[] {
  return [
    {
      key: "name",
      label: "NOMBRE",
      sortable: true,

      render: (category) => (
        <div>
          <p className="font-medium">{category.category_name}</p>

          {category.category_description && (
            <p className="text-xs text-default-400">
              {category.category_description}
            </p>
          )}
        </div>
      ),
    },

    {
      key: "subcategories",
      label: "SUBCATEGORÍAS",

      render: (category) => (
        <Chip size="sm" variant="flat">
          {category.subcategories.length}
        </Chip>
      ),
    },

    {
      key: "isActive",
      label: "ESTADO",

      render: (category) => (
        <Chip
          size="sm"
          color={category.category_status ? "success" : "default"}
          variant="flat"
        >
          {category.category_status ? "Activo" : "Inactivo"}
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
            size="sm"
            variant="light"
            startContent={<Plus size={16} />}
            onPress={() => onCreateSubcategory(category)}
          >
            Subcategoría
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={() => onEdit(category)}
          >
            <Edit size={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            color="danger"
            variant="light"
            onPress={() => onDelete(category)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ),
    },
  ];
}
