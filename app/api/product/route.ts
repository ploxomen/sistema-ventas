import { NextRequest, NextResponse } from "next/server";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
import { parseQueryParams } from "@/utils/parse-query-params";
const URL_API = "products";
export async function GET(request: NextRequest) {
  const queryParams = parseQueryParams(request);
  const response = await apiAxiosServer.get(URL_API, {
    params: queryParams,
  });
  return NextResponse.json(response.data);
}
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const response = await apiAxiosServer.post(URL_API, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return NextResponse.json(response.data);
}
