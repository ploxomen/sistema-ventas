import { NextRequest, NextResponse } from "next/server";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
import { parseQueryParams } from "@/utils/parse-query-params";
import { ApiError } from "@/lib/ApiError";
const URL_API = "users";
export async function GET(request: NextRequest) {
  const queryParams = parseQueryParams(request);
  const response = await apiAxiosServer.get(URL_API, {
    params: queryParams,
  });
  return NextResponse.json(response.data);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const response = await apiAxiosServer.post(URL_API, body);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      return NextResponse.json(error.data, {
        status: error.status,
      });
    }
  }
}
