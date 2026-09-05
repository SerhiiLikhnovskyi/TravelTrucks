import { create } from "zustand";

export interface Filters {
  location: string | null;
  form: "alcove" | "panel_van" | "integrated" | "semi_integrated" | null;
  transmission: "automatic" | "manual" | null;
  engine: "diesel" | "petrol" | "hybrid" | "electric" | null;
}

interface FiltersState {
  filters: Filters;
  setFilters: (values: Filters) => void;
  resetFilters: () => void;
  resetAllFilters: () => void;
}

export const useFilterStore = create<FiltersState>((set) => ({
  filters: {
    location: null,
    form: null,
    transmission: null,
    engine: null,
  },

  setFilters: (values) => set({ filters: values }),

  resetFilters: () =>
    set((state) => ({
      filters: {
        ...state.filters,
        form: null,
        transmission: null,
        engine: null,
      },
    })),
  resetAllFilters: () =>
    set({
      filters: {
        location: null,
        form: null,
        transmission: null,
        engine: null,
      },
    }),
}));
