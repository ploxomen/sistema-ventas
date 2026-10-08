"use client";
import { Button, Chip } from "@heroui/react";
import { Edit, Trash2 } from "lucide-react";
import type { TableColumn } from "@/types/table";
import type { Category } from "@/types/category";
import type { StatusUser, User } from "@/types/user";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface UserColumnAction {
  onDelete?: (idCategory: number) => void;
}
const ChipUserStatus = ({ status }: { status: StatusUser }) => {
  const statusConfig: Record<
    StatusUser,
    { badge: string; dot: string; label: string }
  > = {
    ONLINE: {
      badge: "bg-green-50 text-green-700",
      dot: "bg-green-500",
      label: "Activo",
    },
    DISABLED: {
      badge: "bg-red-50 text-red-700",
      dot: "bg-red-500",
      label: "Inactivo",
    },
    RESTORE: {
      badge: "bg-yellow-50 text-yellow-700",
      dot: "bg-yellow-500",
      label: "Restaurado",
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
export function createUserColumn({
  onDelete = () => {},
}: UserColumnAction): TableColumn<User>[] {
  return [
    {
      key: "name",
      label: "USUARIO",
      sortable: true,
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
            {user.firstName.charAt(0).toUpperCase()}
            {user.lastName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              ID: {user.id?.toString().padStart(3, "0")}
            </p>
          </div>
        </div>
      ),
    },

    {
      key: "document",
      label: "DOCUMENTO",
      render: (user) => (
        <>
          <p className="font-medium text-gray-800">{user.documentType}</p>
          <p className="mt-1 text-gray-500">{user.documentNumber}</p>
        </>
      ),
    },
    {
      key: "contact",
      label: "CONTACTO",
      render: (user) => (
        <>
          <p className="text-gray-800">{user.email}</p>
          <p className="mt-1 text-gray-500">{user.phone}</p>
        </>
      ),
    },
    {
      key: "address",
      label: "DIRECCION",
      render: (user) => {
        user.address;
      },
    },
    {
      key: "status",
      label: "ESTADO",
      render: (user) => <ChipUserStatus status={user.status!} />,
    },
    {
      key: "actions",
      label: "ACCIONES",
      align: "end",

      render: (user) => (
        <div className="flex justify-end gap-1">
          <Button
            as="a"
            href={`/dashboard/user/${user.id}`}
            size="sm"
            variant="light"
            isIconOnly
            aria-label="Editar usuario"
          >
            <Edit size={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            color="danger"
            variant="light"
            onPress={() => onDelete(user.id!)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ),
    },
  ];
}
