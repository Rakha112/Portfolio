import { create } from "zustand";

export interface ModalStore {
  isOpen: boolean;
  slug: string;
  title: string;
  poster: string;
  src: string;
  youtube: string | undefined;
  setIsOpen: (value: boolean) => void;
  setPoster: (value: string) => void;
  setSrc: (value: string) => void;
  setSlug: (value: string) => void;
  setTitle: (value: string) => void;
  setYoutube: (value: string | undefined) => void;
}

const initialState: ModalStore = {
  isOpen: false,
  slug: "",
  title: "",
  youtube: undefined,
  poster: "",
  src: "",
  setIsOpen: () => {},
  setPoster: () => {},
  setSrc: () => {},
  setTitle: () => {},
  setSlug: () => {},
  setYoutube: () => {},
};

const useModalStore = create<ModalStore>((set) => ({
  ...initialState,
  setIsOpen: (value) => set({ isOpen: value }),
  setSlug: (value) => set({ slug: value }),
  setPoster: (value) => set({ poster: value }),
  setSrc: (value) => set({ src: value }),
  setTitle: (value) => set({ title: value }),
  setYoutube: (value) => set({ youtube: value }),
}));

export default useModalStore;
