import { NextRequest, NextResponse } from "next/server";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
import { ApiListResponse } from "@/types/api";
import { Brand } from "@/types/brand";
import { parseQueryParams } from "@/utils/parse-query-params";

export async function GET(request: NextRequest) {
  const queryParams = parseQueryParams(request);
  const response = await apiAxiosServer.get<ApiListResponse<Brand>>("brands", {
    params: queryParams,
  });
  return NextResponse.json(response.data);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const response =await apiAxiosServer.post("brands", body);
  return NextResponse.json({...response.data});
}
