import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

export const useSidebar = create<SidebarState>()((set, get) => ({
  isOpen: true,
  toggle: () => set({ isOpen: !get().isOpen }),
}));
