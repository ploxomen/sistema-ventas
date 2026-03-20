import { BrushIcon } from "lucide-react";
import React from "react";

export default function EmptyList({
  description = "No se encontraron resultados",
}: {
  description: string;
}) {
  return (
    <div className="py-10 px-2 text-slate-400">
      <BrushIcon size={56} className="mx-auto my-2" />
      <p className="text-center font-semibold">{description}</p>
    </div>
  );
}
