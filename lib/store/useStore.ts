import { create } from "zustand";
interface Filters {
  location: string;
  camper: string;
  engine: string;
  transmission: string;
}
interface FiltersState {
  filters: Filters;
  setFilters: (values: Filters) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FiltersState>((set) => ({
  filters: {
    location: "",
    camper: "",
    engine: "",
    transmission: "",
  },
  setFilters: (values) => set({ filters: values }),
  resetFilters: () =>
    set({
      filters: { location: "", camper: "", engine: "", transmission: "" },
    }),
}));
