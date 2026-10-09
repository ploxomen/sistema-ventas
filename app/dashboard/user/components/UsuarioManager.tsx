"use client"
import { useDataTable } from '@/hooks/tables/useDataTable';
import { User } from '@/types/user';
import React, { useMemo } from 'react'
import { createUserColumn } from './UserColumnAction';
import { DataTable, DataTablePagination, DataTableToolbar } from '@/components/ui/data-table';

export default function UsuarioManager() {
  //MODAL DE CREACION Y EDICION
  //LLENADO DE TABLA
  const table = useDataTable<User>({
    initialPageSize: 10,
    endpoint: "users",
  });
  //ACCIONES DE EDITAR Y ELIMINAR DB
//   const { onEdit, onDelete, categorie, setCategorie, status : statusRequest } = useCategorie({
//     openModal: onOpenChange,
//     onFetch: table.fetchData,
//   });
  //CONSTRUCCION DE COLUMNAS
  const columns = useMemo(
    () =>
      createUserColumn({
        onDelete : () => {},
      }),
    [],
  );
  return (
    <>
      <div className="space-y-5">
        <DataTableToolbar
          search={table.search}
          onSearchChange={table.setSearch}
          onFilterChange={table.setFilter}
          onClearFilters={table.clearFilters}
          createLabel="Nuevo usuario"
          onCreate={() => {
            window.location.href = "/dashboard/user/new"
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
      
    </>
  )
}
