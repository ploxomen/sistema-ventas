export class ApiError extends Error {
  constructor(
    public status: number,
    public data: unknown,
  ) {
    super(
      typeof data === "object" &&
      data !== null &&
      "message" in data
        ? String(data.message)
        : "Error en la API",
    );
  }
}