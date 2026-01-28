import { create } from "zustand";
import { persist } from "zustand/middleware";
type ColorSidebar = "white" | "black";
interface ColorSidebarState {
  colorSidebar: ColorSidebar;
  setColorSidebar: (color: ColorSidebar) => void;
}
export const useColorSidebar = create<ColorSidebarState>()(
  persist(
    (set) => ({
      colorSidebar: "white",
      setColorSidebar: (color) => set({ colorSidebar: color }),
    }),
    {
      name: "color-sidebar-storage",
    },
  ),
);
