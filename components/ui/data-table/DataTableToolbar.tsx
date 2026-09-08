"use client";

import { Button, Input, Select, SelectItem } from "@heroui/react";

import { Filter, Plus, RotateCcw, Search } from "lucide-react";

import type { TableFilter } from "@/types/table";
import InputCustom from "../input-custom";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  filters?: TableFilter[];
  activeFilters?: Record<string, string[]>;
  onFilterChange?: (key: string, values: string[]) => void;
  onClearFilters?: () => void;
  createLabel?: string;
  onCreate?: () => void;
}

export function DataTableToolbar({
  search,
  onSearchChange,
  filters = [],
  activeFilters = {},
  onFilterChange,
  onClearFilters,
  createLabel,

  onCreate,
}: Props) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 md:flex-row">
        <InputCustom
          className="max-w-md"
          placeholder="Buscar..."
          value={search}
          onValueChange={onSearchChange}
          startContent={<Search size={18} className="text-default-400" />}
          isClearable
          onClear={() => onSearchChange("")}
        />

        {filters.map((filter) => (
          <Select
            key={filter.key}
            labelPlacement="outside-top"
            placeholder="seleccione una opción"
            className="w-full md:w-48"
            label={filter.label}
            selectionMode="multiple"
            selectedKeys={new Set(activeFilters[filter.key] ?? [])}
            onSelectionChange={(keys) => {
              onFilterChange?.(filter.key, Array.from(keys).map(String));
            }}
          >
            {filter.options.map((option) => (
              <SelectItem key={option.value}>{option.label}</SelectItem>
            ))}
          </Select>
        ))}

        {/* {onClearFilters && (
          <Button
            variant="flat"
            startContent={<RotateCcw size={16} />}
            onPress={onClearFilters}
          >
            Limpiar
          </Button>
        )} */}
      </div>

      {onCreate && (
        <Button
          color="primary"
          startContent={<Plus size={18} />}
          onPress={onCreate}
        >
          {createLabel ?? "Nuevo"}
        </Button>
      )}
    </div>
  );
}
