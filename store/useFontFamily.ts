import { create } from "zustand";
import { persist } from "zustand/middleware";
type FontType = "inter" | "nunito" | "dm-sans" | "public-sans";
export const FONT_VARIABLES: Record<FontType, string> = {
  inter: "var(--font-inter)",
  nunito: "var(--font-nunito)",
  "dm-sans": "var(--font-dm-sans)",
  "public-sans": "var(--font-public-sans)",
};
export const FONTS : {label : string; value: FontType}[] = [
  { label: "Inter", value: "inter" },
  { label: "Nunito Sans", value: "nunito" },
  { label: "DM Sans", value: "dm-sans" },
  { label: "Public Sans", value: "public-sans" },
];
interface FontFamilyState {
  fontFamily: FontType;
  setFontFamily: (fontFamily: FontType) => void;
}
export const useFontFamily = create<FontFamilyState>()(
  persist(
    (set) => ({
      fontFamily: "inter",
      setFontFamily: (fontFamily) => set({ fontFamily }),
    }),
    {
      name: "font-family-storage",
    },
  ),
);
