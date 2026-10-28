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
  defaults: DefaultOptions = {},
): PaginationParams {
  const searchParams = request.nextUrl.searchParams;
  // Valores por defecto
  // 1. Manejo seguro para page y limit (evitando NaN y asegurando mínimos)
  const rawPage = parseInt(searchParams.get("page") ?? "1", 10);
  const page = !isNaN(rawPage) && rawPage > 0 ? rawPage : 1;

  const rawLimit = parseInt(searchParams.get("limit") ?? "10", 10);
  const limit = !isNaN(rawLimit) && rawLimit > 0 ? rawLimit : 10;

  // 2. Validación segura para sortDirection
  const rawSort = searchParams.get("sortDirection");
  const sortDirection: "asc" | "desc" = rawSort === "desc" ? "desc" : "asc";
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
