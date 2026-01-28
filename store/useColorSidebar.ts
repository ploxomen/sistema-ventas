import ColorApparent from "@/components/icons/ColorApparent";
import ColorIntegrate from "@/components/icons/ColorIntegrate";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type ColorSidebar = "white" | "black";
type ColorSidebarOption = {
  color: ColorSidebar;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
export const COLOR_SIDEBAR_OPTIONS: ColorSidebarOption[] = [
  {
    color: "white",
    text: "Claro",
    Icon: ColorIntegrate,
  },
  {
    color: "black",
    text: "Oscuro",
    Icon: ColorApparent,
  },
];
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
