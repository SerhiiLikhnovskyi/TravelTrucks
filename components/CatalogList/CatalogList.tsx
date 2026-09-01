"use client";

import { useFilterStore } from "@/lib/store/useStore";
import CatalogCard from "../CatalogCard/CatalogCard";
import { Camper, getCampers } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";
import css from "./CatalogList.module.css";
export default function CatalogList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["campers"],
    queryFn: () => getCampers(),
  });

  const campers = Array.isArray(data) ? data : data?.campers || [];
  //   const filters = useFilterStore((state) => state.filters);

  return (
    <>
      <ul className={css.catalogList}>
        {campers.map((camper) => (
          <CatalogCard key={camper.id} camper={camper} />
        ))}
      </ul>
    </>
  );
}
