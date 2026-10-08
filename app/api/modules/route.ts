import { NextRequest, NextResponse } from "next/server";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
import { parseQueryParams } from "@/utils/parse-query-params";
const URL_API = "modules";
export async function GET(request: NextRequest) {
  const queryParams = parseQueryParams(request);
  const response = await apiAxiosServer.get(URL_API, {
    params: queryParams,
  });
  return NextResponse.json(response.data);
}
