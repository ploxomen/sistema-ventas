import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/utils/autenticacion-user";

export async function GET() {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json(
        { user: null, message: "No autenticado" },
        { status: 401 }
      );
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/auth/me:", error);
    return NextResponse.json(
      { user: null, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}