import { create } from "zustand";
import { persist } from "zustand/middleware";
interface FontSiteState {
  fontSize: number;
  setFontSize: (size: number) => void;
}
export const useFontSize = create<FontSiteState>()(
  persist(
    (set) => ({
      fontSize: 16,
      setFontSize: (size: number) => set({ fontSize: size }),
    }),
    {
      name: "font-size-storage",
    },
  ),
);
