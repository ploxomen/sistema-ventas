"use client";

import { Button, Input, Select, SelectItem } from "@heroui/react";

import { Filter, Plus, RotateCcw, Search } from "lucide-react";

import type { TableFilter } from "@/types/table";
import InputCustom, { SelectCustom } from "../input-custom";

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
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between my-5">
      <div className="grid flex-1 items-center gap-3 grid-cols-12">
        <InputCustom
          label="Buscar"
          className="col-span-full md:col-span-6"
          placeholder="Buscar..."
          value={search}
          onValueChange={onSearchChange}
          startContent={<Search size={18} className="text-default-400" />}
          isClearable
          onClear={() => onSearchChange("")}
        />

        {filters.map((filter) => (
          <SelectCustom
            key={filter.key}
            placeholder="seleccione una opción"
            className={filter.className}
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
          </SelectCustom>
        ))}

        
      </div>
        {onClearFilters && (
          <Button
            variant="flat"
            startContent={<RotateCcw size={16} />}
            onPress={onClearFilters}
          >
            Limpiar
          </Button>
        )}
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
