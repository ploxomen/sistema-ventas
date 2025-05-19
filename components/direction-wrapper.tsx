"use client";
import { useContrast } from "@/store/useContrast";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useEffect, useState } from "react";
export function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { isRTL } = useDirectionStore();
  const { isContrast } = useContrast();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.classList.toggle("bg-[var(--background-contrast)]",isContrast);
    setMounted(true);
  }, [isRTL,isContrast]);
  if (!mounted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center z-40 bg-red-400">
        <p className="text-muted-foreground text-sm">Cargando dirección...</p>
      </div>
    );
  }
  return <>{children}</>;
}
