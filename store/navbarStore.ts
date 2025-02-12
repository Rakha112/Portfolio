import { create } from "zustand";

export interface NavBarStore {
  isNavBarOpen: boolean;
  openNavBar: () => void;
  closeNavBar: () => void;
}

const initialState: NavBarStore = {
  isNavBarOpen: false,
  openNavBar: () => {},
  closeNavBar: () => {},
};

const useNavbarStore = create<NavBarStore>((set) => ({
  ...initialState,
  openNavBar: () => set({ isNavBarOpen: true }),
  closeNavBar: () => set({ isNavBarOpen: false }),
}));

export default useNavbarStore;
