import { create } from "zustand";
import { persist } from "zustand/middleware";
type State = {
  isRTL: boolean;
  toggleRTL: () => void;
};
export const useDirectionStore = create<State>()(
  persist(
    (set) => ({
      isRTL: false,
      toggleRTL: () => set((state) => ({ isRTL: !state.isRTL })),
    }),
    {
      name: "direction-storage",
    }
  )
);
