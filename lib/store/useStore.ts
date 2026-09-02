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
  resetForm: (() => void) | null;
  setResetForm: (resetForm: () => void) => void;
}

export const useFilterStore = create<FiltersState>((set) => ({
  filters: {
    location: null,
    form: null,
    transmission: null,
    engine: null,
  },

  resetForm: null,
  setFilters: (values) => set({ filters: values }),
  resetFilters: () =>
    set({
      filters: { location: null, form: null, transmission: null, engine: null },
    }),
  setResetForm: (resetForm) => set({ resetForm }),
}));
