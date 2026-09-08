"use client";

import {
  Button,
  Pagination,
  Select,
  SelectItem,
} from "@heroui/react";

interface Props {
  page: number;

  totalPages: number;

  pageSize: number;

  totalItems: number;

  onPageChange: (
    page: number
  ) => void;

  onPageSizeChange: (
    size: number
  ) => void;
}

const PAGE_SIZE_OPTIONS = [
  10,
  25,
  50,
  100,
];

export function DataTablePagination({
  page,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 border-t border-default-200 pt-4 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm text-default-500">
        {totalItems} registros
      </p>

      <div className="flex items-center gap-3">

        <Select
          aria-label="Registros por página"
          className="w-32"
          size="sm"
          selectedKeys={[
            String(pageSize),
          ]}
          onSelectionChange={(
            keys
          ) => {
            const value =
              Array.from(keys)[0];

            if (value) {
              onPageSizeChange(
                Number(value)
              );
            }
          }}
        >
          {PAGE_SIZE_OPTIONS.map(
            (size) => (
              <SelectItem
                key={size}
              >
                {size} / página
              </SelectItem>
            )
          )}
        </Select>

        <Pagination
          showControls
          size="sm"
          page={page}
          total={totalPages}
          onChange={onPageChange}
        />

      </div>
    </div>
  );
}