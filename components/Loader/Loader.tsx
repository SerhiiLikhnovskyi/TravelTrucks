import React from "react";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div>
      <span className={css.loader}></span>
    </div>
  );
}
