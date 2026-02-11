import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

type colors = "black" | "yellow" | "red" | "green";

const TypeColor: Record<colors, string> = {
  black: "bg-black",
  green:
    "bg-green-100 text-green-700 group-data-[state=active]:bg-green-500 group-data-[state=active]:text-white",
  yellow:
    "bg-yellow-100 text-yellow-700 group-data-[state=active]:bg-yellow-500 group-data-[state=active]:text-black",
  red: "bg-red-100 text-red-700 group-data-[state=active]:bg-red-500 group-data-[state=active]:text-white",
};

export default function CountState({
  children,
  className,
  color,
}: {
  children?: React.ReactNode;
  className?: string;
  color: colors;
}) {
  return (
    <Badge
      className={cn(
        "rounded-md transition-colors ml-2 h-6 text-xs font-bold px-1.5",
        TypeColor[color],
        className,
      )}
    >
      {children}
    </Badge>
  );
}
