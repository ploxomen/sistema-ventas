"use client";
import { usePositionSidebar } from "@/store/usePositionSidebar";
export default function Header({ children }: { children: React.ReactNode }) {
  const { positionSidebar } = usePositionSidebar();
  return (
    <header
      className={`flex items-center px-4 py-2 shrink-0 justify-between gap-2 transition-[width,height] ease-linear ${positionSidebar === "right" ? "flex-row-reverse" : ""}`}
    >
      {children}
    </header>
  );
}
