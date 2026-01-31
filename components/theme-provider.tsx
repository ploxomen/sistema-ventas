"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { colorMap, useThemeColor } from "@/store/useThemeColor";
import { useEffect } from "react";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useContrast } from "@/store/useContrast";
import { FONT_VARIABLES, useFontFamily } from "@/store/useFontFamily";
import { useFontSize } from "@/store/useFontSize";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { isRTL } = useDirectionStore();
  const { isContrast } = useContrast();
  const { primaryColor } = useThemeColor();
  const { fontFamily } = useFontFamily();
  const { fontSize } = useFontSize();

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
      "font-size",
      `${fontSize}px`,
    );
    document.documentElement.style.setProperty(
      "--font-current",
      `${FONT_VARIABLES[fontFamily]}`,
    );
  }, [primaryColor, isContrast, isRTL, fontFamily, fontSize]);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
