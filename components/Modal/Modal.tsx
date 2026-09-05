"use client";
import React, { useEffect } from "react";
import css from "./Modal.module.css";
import Loader from "../Loader/Loader";

export default function Modal() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className={css.backdrop}>
      <div className={css.modalWrapper}>
        <div>
          <Loader />
        </div>
        <div className={css.content}>
          <h3 className={css.loaderTitle}>Loading tracks...</h3>
          <p className={css.loaderText}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </div>
      </div>
    </div>
  );
}
