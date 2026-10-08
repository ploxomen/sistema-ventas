import { NextRequest, NextResponse } from "next/server";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
import { ApiListResponse } from "@/types/api";
import { parseQueryParams } from "@/utils/parse-query-params";
import { Category } from "@/types/category";
const URL_API = "categories";
export async function GET(request: NextRequest) {
  const queryParams = parseQueryParams(request);
  const response = await apiAxiosServer.get<ApiListResponse<Category>>(URL_API, {
    params: queryParams,
  });
  return NextResponse.json(response.data);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await apiAxiosServer.post(URL_API, body);
  return NextResponse.json(response.data);
}
