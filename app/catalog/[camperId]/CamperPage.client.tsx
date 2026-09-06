"use client";
import Gallery from "@/components/Gallery/Gallery";
import { getCamperById } from "@/lib/api/api";
import React from "react";
import css from "./CamperPage.module.css";

import Reviews from "@/components/Reviews/Reviews";
import Form from "@/components/Form/Form";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader/Loader";
import CamperInfo from "@/components/CamperInfo/CamperInfo";
import Details from "@/components/Details/Details";

type Props = {
  camperId: string;
};
export default function CamperPage({ camperId }: Props) {
  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
    refetchOnMount: false,
  });
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError || !camper) {
    return <p>Something went wrong</p>;
  }
  return (
    <main>
      <div className={`container ${css.camperContainer}`}>
        <section className={css.section}>
          <div className={css.topContent}>
            <Gallery gallery={camper.gallery} />
            <div className={css.wrapper}>
              <CamperInfo camper={camper} />
              <Details camper={camper} />
            </div>
          </div>
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Reviews</h2>
          <div className={css.bottomContent}>
            <Reviews camperId={camperId} />
            <Form camperId={camperId} />
          </div>
        </section>
      </div>
    </main>
  );
}
