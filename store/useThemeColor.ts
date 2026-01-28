import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeColor =
  | "blue"
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "yellow";
export const colors: ThemeColor[] = [
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "red",
];

export const colorMap: Record<ThemeColor, string> = {
  blue: "59,130,246",
  red: "239,68,68",
  green: "34,197,94",
  purple: "168,85,247",
  orange: "249,115,22",
  yellow: "253,169,45",
};
interface ThemeState {
  primaryColor: ThemeColor;
  setPrimaryColor: (color: ThemeColor) => void;
}
export const useThemeColor = create<ThemeState>()(
  persist(
    (set) => ({
      primaryColor: "orange",
      setPrimaryColor: (color) => set({ primaryColor: color }),
    }),
    {
      name: "theme-color-storage",
    },
  ),
);
