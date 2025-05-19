import { create } from "zustand";
import { persist } from "zustand/middleware";
type State = {
  isContrast: boolean;
  toggleContrast: () => void;
};
export const useContrast = create<State>()(
  persist(
    (set) => ({
      isContrast: false,
      toggleContrast: () => set((state) => ({isContrast : !state.isContrast})),
    }),
    {
      name: "contrast-storage",
    }
  )
);
