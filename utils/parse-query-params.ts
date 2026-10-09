import { NextRequest } from "next/server";

export interface PaginationParams {
  page: number;
  limit: number;
  sortDirection: "asc" | "desc";
  column?: string;
  search?: string;
  [key: string]: any; // Para permitir parámetros adicionales dinámicos
}

interface DefaultOptions {
  page?: number;
  limit?: number;
  sortDirection?: "asc" | "desc";
  column?: string;
}

export function parseQueryParams(
  request: NextRequest,
  defaults: DefaultOptions = {}
): PaginationParams {
  const searchParams = request.nextUrl.searchParams;

  // Valores por defecto
  const page = defaults.page ?? 0;
  const limit = defaults.limit ?? 0;
  const sortDirection = defaults.sortDirection ?? "asc";
  // Columna por la cual ordenar
  const column = searchParams.get("column") || undefined;
  // Búsqueda opcional
  const search = searchParams.get("search") || undefined;
  // Extraer parámetros adicionales que no coincidan con las claves base
  const extraParams: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (!["page", "limit", "sortDirection", "column", "search"].includes(key)) {
      extraParams[key] = value;
    }
  });
  return {
    page,
    limit,
    sortDirection,
    ...(column ? { column } : {}),
    ...(search ? { search } : {}),
    ...extraParams,
  };
}