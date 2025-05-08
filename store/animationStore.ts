import { create } from "zustand";

export interface AnimationStore {
  hasAnimated: boolean;
  setHasAnimated: (v: boolean) => void;
}

const initialState: AnimationStore = {
  hasAnimated: false,
  setHasAnimated: () => {},
};

const useAnimationStore = create<AnimationStore>((set) => ({
  ...initialState,
  hasAnimated: false,
  setHasAnimated: (v) => set({ hasAnimated: v }),
}));

export default useAnimationStore;
