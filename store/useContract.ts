import {create} from "zustand";
import {persist} from "zustand/middleware";
type State = {
    isContract : boolean,
    toggleContract : () => void
}
export const useContract = create<State>()(
    persist(
        (set) => ({
            isContract : false,
            toggleContract : () => set((state) => ({isContract : !state.isContract}))
        }),
        {
            name : 'contract-storage'
        }
    )
)