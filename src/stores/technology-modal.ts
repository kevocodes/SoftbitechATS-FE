import { create } from "zustand";

interface TechnologyModalState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useTechnologyModal = create<TechnologyModalState>()(
  (set, get) => ({
    isOpen: false,
    toggle: () => set({ isOpen: !get().isOpen }),
    close: () => set({ isOpen: false }),
  })
);
