"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { colorMap, useThemeColor } from "@/store/useThemeColor";
import { useEffect } from "react";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useContrast } from "@/store/useContrast";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { isRTL } = useDirectionStore();
  const { isContrast } = useContrast();
  const { primaryColor } = useThemeColor();
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.classList.toggle(
      "bg-[var(--background-contrast)]",
      isContrast,
    );
    document.documentElement.style.setProperty(
      "--primary",
      `rgb(${colorMap[primaryColor]})`,
    );
  }, [primaryColor, isContrast, isRTL]);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
