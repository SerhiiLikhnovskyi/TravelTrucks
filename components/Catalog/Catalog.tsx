import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CatalogList from "../CatalogList/CatalogList";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <>
      <div className={css.container}>
        <div className={css.sidebar}>
          <Sidebar />
        </div>
        <div className={css.Catalog}>
          <CatalogList />
        </div>
      </div>
    </>
  );
}
