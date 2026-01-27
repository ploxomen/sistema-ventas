import LayoutNavLeft from "@/components/icons/LayoutNavLeft";
import LayoutNavRight from "@/components/icons/LayoutNavRight";
import LayoutNavTop from "@/components/icons/LayoutNavTop";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export type Position = "left" | "top" | "right";
type PositionOption = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  position: Position;
};
export const POSITION_OPTIONS: PositionOption[] = [
  {
    Icon: LayoutNavLeft,
    position: "left",
  },
  {
    Icon: LayoutNavTop,
    position: "top",
  },
  {
    Icon: LayoutNavRight,
    position: "right",
  },
];
export interface PositionSidebar {
  positionSidebar: Position;
  setPositionSidebar: (position: Position) => void;
}
export const usePositionSidebar = create<PositionSidebar>()(
  persist(
    (set) => ({
      positionSidebar: "left",
      setPositionSidebar: (position) => set({ positionSidebar: position }),
    }),
    {
      name: "position-slibar",
    },
  ),
);
