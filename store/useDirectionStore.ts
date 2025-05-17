import { create } from "zustand";
import { persist } from "zustand/middleware";
type State = {
  isRTL: boolean;
  toogleRTL: () => void;
};
export const useDirectionStore = create<State>()(
  persist(
    (set) => ({
      isRTL: false,
      toogleRTL: () => set((state) => ({ isRTL: !state.isRTL })),
    }),
    {
      name: "direction-storage",
    }
  )
);
