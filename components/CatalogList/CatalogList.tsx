"use client";

import { useFilterStore } from "@/lib/store/useStore";
import CatalogCard from "../CatalogCard/CatalogCard";
import { getCampers } from "@/lib/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import css from "./CatalogList.module.css";
import NoCampers from "../NoCampers/NoCampers";
export default function CatalogList() {
  const filters = useFilterStore((state) => state.filters);
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];
  if (isLoading) return <p>Завантаження кемперів...</p>;
  if (isError) return <p>Помилка: {error?.message || "Щось пішло не так"}</p>;
  return (
    <>
      {campers.length > 0 ? (
        <>
          <ul className={css.catalogList}>
            {campers.map((camper) => (
              <CatalogCard key={camper.id} camper={camper} />
            ))}
          </ul>

          {hasNextPage && (
            <button
              className={css.btnLoadMore}
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Завантаження" : "Load more"}
            </button>
          )}
        </>
      ) : (
        <NoCampers />
      )}
    </>
  );
}
