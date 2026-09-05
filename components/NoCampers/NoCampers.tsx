"use client";

import React, { use } from "react";
import Image from "next/image";
import css from "./NoCampers.module.css";
import { useFilterStore } from "@/lib/store/useStore";

export default function NoCampers() {
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const resetAllFilters = useFilterStore((state) => state.resetAllFilters);

  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image
          src="/NoCampers.png"
          alt="Travel Trucks for you"
          width={488}
          height={463}
        />
      </div>
      <div className={css.content}>
        <h2>No campers found</h2>
        <p>
          We couldn`t find any campers that match your filters.
          <br />
          Try adjusting your search or clearing some filters.
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button onClick={() => resetFilters?.()} className={css.btnClear}>
          Clear filters
        </button>
        <button onClick={() => resetAllFilters?.()} className={css.btnView}>
          View all campers
        </button>
      </div>
    </div>
  );
}
