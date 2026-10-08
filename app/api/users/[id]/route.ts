import { NextRequest, NextResponse } from "next/server";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
interface RouteContext {
  params: Promise<{ id: string }>;
}
const URL_API = "users";

export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const body = await request.json();
  const response = await apiAxiosServer.put(URL_API + "/" + id, body);
  return NextResponse.json(response.data);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const response = await apiAxiosServer.delete(URL_API + "/" + id);
  return NextResponse.json(response.data);
}
