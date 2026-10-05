"use client";
import { useCallback, useMemo } from "react";
import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "@/components/ui/data-table";

import { useDataTable } from "@/hooks/tables/useDataTable";
import { Category } from "@/types/category";
import { createCategoryColumns } from "./CategoryColumns";
import { TableFilter } from "@/types/table";
import { useDisclosure } from "@heroui/react";
import CategoryModal from "./CategoryModal";
import { useCategorie } from "../hooks/useCategorie";
import { LoaderOverlay } from "@/components/loader-overlay";

export function CategoryManager() {
  //MODAL DE CREACION Y EDICION
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //LLENADO DE TABLA
  const table = useDataTable<Category>({
    initialPageSize: 10,
    endpoint: "categories",
  });
  //ACCIONES DE EDITAR Y ELIMINAR DB
  const { onEdit, onDelete, categorie, setCategorie, status : statusRequest } = useCategorie({
    openModal: onOpenChange,
    onFetch: table.fetchData,
  });
  //CONSTRUCCION DE COLUMNAS
  const columns = useMemo(
    () =>
      createCategoryColumns({
        onEdit,
        onDelete,
      }),
    [onEdit, onDelete],
  );
  return (
    <>
      <div className="space-y-5">
        <DataTableToolbar
          search={table.search}
          onSearchChange={table.setSearch}
          onFilterChange={table.setFilter}
          onClearFilters={table.clearFilters}
          createLabel="Nueva categoría"
          onCreate={() => {
            onOpen();
            setCategorie(null);
          }}
        />

        <DataTable data={table.data} columns={columns} />

        <DataTablePagination
          page={table.page}
          totalPages={table.totalPages}
          pageSize={table.limit}
          totalItems={table.total}
          onPageChange={table.setPage}
          onPageSizeChange={table.setPageSize}
        />
      </div>
      <CategoryModal
        categorie={categorie}
        isOpen={isOpen}
        onFetchdata={table.fetchData}
        onOpenChange={onOpenChange}
      />
      {
        statusRequest === "EN_PROGRESO" && <LoaderOverlay isVisible={true} message="Cargando petición"/> 
      }
    </>
  );
}
