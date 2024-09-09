import { create } from "zustand";

export const useItems = create((set) => ({
  items: ["Refillable water bottle"],

  addItem: (value) => set((state) => ({ items: state.items.concat(value) })),

  clearItems: () => set(() => ({ items: [] })),

  removeItem: (value) =>
    set((state) => ({ items: state.items.filter((curr) => curr !== value) })),
}));
