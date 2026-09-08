"use client";
import { useCallback, useEffect, useState } from "react";
import { apiAxios } from "@/lib/apiAxios";
import type { ApiListResponse } from "@/types/api";
import type { DataTableParams } from "@/types/table";
interface UseDataTableOptions {
  endpoint ?: string;
  initialPageSize?: number;
  initialSearch?: string;
  initialSortBy?: string;
  initialSortDirection?: "asc" | "desc";
  initialFilters?: Record<string, string | string[] | number | boolean>;
}

export function useDataTable<T>({
  endpoint,
  initialPageSize = 10,
  initialSearch = "",
  initialSortBy,
  initialSortDirection = "asc",
  initialFilters = {},
}: UseDataTableOptions) {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialPageSize);
  const [search, setSearch] = useState(initialSearch);
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">(
    initialSortDirection,
  );
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params: DataTableParams = {
        page,
        limit,
        search: search.trim() || undefined,
        sortBy,
        sortDirection,

        filters,
      };
      const response = await apiAxios.get<ApiListResponse<T>>(endpoint, {
        params,
      });
      const result = response.data;
      setData(result.data);
      setTotal(result.pagination.total);
      setTotalPages(result.pagination.totalPages);
    } catch (error) {
      console.error("Error loading table data:", error);
      setError("No se pudo cargar la información.");
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [endpoint, page, limit, search, filters, sortBy, sortDirection]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, []);

  const handleFilter = useCallback(
    (key: string, value: string | string[] | number | boolean) => {
      setFilters((current) => ({
        ...current,
        [key]: value,
      }));
      setPage(1);
    },
    [],
  );

  const removeFilter = useCallback((key: string) => {
    setFilters((current) => {
      const next = {
        ...current,
      };
      delete next[key];
      return next;
    });
    setPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
    setPage(1);
  }, []);

  const handleSort = useCallback(
    (column: string) => {
      setPage(1);
      if (sortBy !== column) {
        setSortBy(column);
        setSortDirection("asc");
        return;
      }
      if (sortDirection === "asc") {
        setSortDirection("desc");
        return;
      }
      setSortBy(undefined);
      setSortDirection("asc");
    },
    [sortBy, sortDirection],
  );

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const handlePageSizeChange = useCallback((newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  }, []);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const reset = useCallback(() => {
    setSearch(initialSearch);
    setFilters(initialFilters);
    setPage(1);
    setLimit(initialPageSize);
    setSortBy(initialSortBy);
    setSortDirection(initialSortDirection);
  }, [
    initialSearch,
    initialFilters,
    initialPageSize,
    initialSortBy,
    initialSortDirection,
  ]);

  return {
    data,
    loading,
    error,
    page,
    limit,
    total,
    totalPages,
    search,
    filters,
    sortBy,
    sortDirection,
    setSearch: handleSearch,
    setFilter: handleFilter,
    removeFilter,
    clearFilters,
    handleSort,
    setPage: handlePageChange,
    setPageSize: handlePageSizeChange,
    refresh,
    reset,
  };
}
