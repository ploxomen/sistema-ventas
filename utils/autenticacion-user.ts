import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  if (!token) {
    return null;
  }
  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) {
    throw new Error("JWT_ACCESS_SECRET no está configurado");
  }
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));

    return {
      id: Number(payload.sub),
      email: payload.email as string,
      firstName: (payload.firstName as string | null) ?? null,
      lastName: (payload.lastName as string | null) ?? null,
      fullName: (payload.fullName as string | null) ?? null,
    };
  } catch {
    return null;
  }
}