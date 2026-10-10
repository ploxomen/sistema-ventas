"use client"
import { cn } from "@/lib/utils";
import { TableColumn } from "@/types/table";
import { StatusProduct } from "@/types/user";
import { Button } from "@heroui/react";
import { Edit, Trash2 } from "lucide-react";

export interface ProductTable {
  id: number;
  name: string;
  categoryName: string;
  url?: string | null;
  description?: string;
  price: number;
  stock: number;
  minimunStock: number;
}
const ChipProductStatus = ({ status }: { status: StatusProduct }) => {
  const statusConfig: Record<
    StatusProduct,
    { badge: string; dot: string; label: string }
  > = {
    EN_STOCK: {
      badge: "bg-green-50 text-green-700",
      dot: "bg-green-500",
      label: "En stock",
    },
    AGOTADO: {
      badge: "bg-red-50 text-red-700",
      dot: "bg-red-500",
      label: "Agotado",
    },
    POR_AGOTARCE: {
      badge: "bg-yellow-50 text-yellow-700",
      dot: "bg-yellow-500",
      label: "Por terminar",
    },
  };
  const current = statusConfig[status];
  return (
    <span
      className={cn(
        `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`,
        current.badge,
      )}
    >
      <span
        className={cn(`h-1.5 w-1.5 block rounded-full`, current.dot)}
      ></span>
      {current.label}
    </span>
  );
};
interface ProductColumAction {
  onDelete?: (idProduct: number) => void;
}

export function createColumnProducts({
  onDelete = () => {},
}: ProductColumAction): TableColumn<ProductTable>[] {
  return [
    {
      key: "product",
      label: "PRODUCTO",
      sortable: true,
      render: (product) => (
        <div className="flex items-center gap-3">
          <img
            src={`http://localhost:3001${product.url}`}
            alt={product.name}
            className="w-11 h-11 rounded-xl object-cover bg-slate-100 shrink-0"
            
          />
          <div>
            <span className="font-semibold text-slate-900 block cursor-pointer hover:text-indigo-600 transition">
              {product.name}
            </span>
            {product.description && (
              <span className="text-xs text-slate-500 line-clamp-1">
                {product.description}
              </span>
            )}
          </div>
        </div>
      ),
    },
    {
      key: "categoria",
      label: "CATEGORÍA",
      sortable: false,
      render: (product) => (
        <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium">
          {product.categoryName}
        </span>
      ),
    },
    {
      key: "price",
      label: "PRECIO",
      sortable: false,
      render: (product) => (
        <span className="font-bold text-slate-900">
          S/ {product.price.toFixed(2)}
        </span>
      )
    },
    {
      key: "unit",
      label: "STOCK",
      sortable: false,
      render: (product) => (
        <span className="text-slate-600 font-medium">
          {product.stock} unids.
        </span>
      )
    },
    {
      key: "sataus",
      label: "ESTADO",
      sortable: false,
      render: (product) => {
        let statusProduct: StatusProduct = "EN_STOCK";
        if (product.stock === 0) {
          statusProduct = "AGOTADO";
        } else if (product.stock <= product.minimunStock) {
          statusProduct = "POR_AGOTARCE";
        }
        return <ChipProductStatus status={statusProduct} />;
      }
    },
    {
      key: "actions",
      label: "ACCIONES",
      align: "end",
      render: (product) => (
        <div className="flex justify-end gap-1">
          <Button
            as="a"
            href={`/dashboard/product/${product.id}`}
            size="sm"
            variant="light"
            isIconOnly
            aria-label="Editar producto"
          >
            <Edit size={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            color="danger"
            variant="light"
            onPress={() => onDelete(product.id!)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ),
    },
  ];
}
