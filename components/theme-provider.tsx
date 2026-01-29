"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { colorMap, useThemeColor } from "@/store/useThemeColor";
import { useEffect } from "react";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useContrast } from "@/store/useContrast";
import { FONT_VARIABLES, useFontFamily } from "@/store/useFontFamily";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { isRTL } = useDirectionStore();
  const { isContrast } = useContrast();
  const { primaryColor } = useThemeColor();
  const { fontFamily } = useFontFamily();
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
    document.documentElement.style.setProperty(
      "--font-current",
      `${FONT_VARIABLES[fontFamily]}`,
    );
  }, [primaryColor, isContrast, isRTL, fontFamily]);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
