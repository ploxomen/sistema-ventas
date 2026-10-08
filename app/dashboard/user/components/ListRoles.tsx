import { Role } from "@/types/role";
import { Checkbox } from "@heroui/react";
import React from "react";

export default function ListRoles({
  roles = [],
  rolesSelected = [],
  onChecked = () => {},
}: {
  roles: Role[];
  rolesSelected: number[],
  onChecked: (isChecked: boolean, idRol: number) => void;
}) {
  return (
    <>
      {!roles.length && (
        <div className="px-4 py-6 col-span-full text-center">
          <span className="font-semibold text-slate-600 text-sm">
            No se encontraron roles
          </span>
        </div>
      )}
      {roles.map((role) => (
        <label
          key={role.id}
          className="cursor-pointer rounded-lg col-span-4 border p-4 transition hover:border-yellow-400 hover:bg-gray-50 bg-gray-50"
        >
          <div className="flex items-start gap-3">
            <Checkbox
              isSelected={rolesSelected.some(ro => ro === role.id)}
              onChange={(e) => onChecked(e.target.checked, role.id!)}
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{role.name}</p>
              <p className="mt-1 text-xs text-gray-500">{role.description}</p>
            </div>
          </div>
        </label>
      ))}
    </>
  );
}
