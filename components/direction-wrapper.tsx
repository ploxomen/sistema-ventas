"use client";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useEffect, useState } from "react";
export function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { isRTL } = useDirectionStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    setMounted(true);
  }, [isRTL]);
  if (!mounted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center z-40 bg-red-400">
        <p className="text-muted-foreground text-sm">Cargando dirección...</p>
      </div>
    );
  }
  return <>{children}</>;
}
