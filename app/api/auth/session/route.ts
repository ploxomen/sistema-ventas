import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/utils/autenticacion-user";
import { apiAxiosServer } from "@/lib/apiAxiosServer";

export async function GET() {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json(
        { user: null, message: "No autenticado" },
        { status: 401 }
      );
    }
    const response = await apiAxiosServer.get('auth/session');
    return NextResponse.json({ user, roles: response.data.roles, modules: response.data.modules }, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/auth/session:", error);
    return NextResponse.json(
      { user: null, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}