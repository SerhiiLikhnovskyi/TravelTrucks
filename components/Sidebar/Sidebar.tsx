"use client";
import React from "react";
import css from "./Sidebar.module.css";
import { FaRegMap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Field, Formik } from "formik";
import { useFilterStore } from "@/lib/store/useStore";
import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/lib/api/api";

export default function Sidebar() {
  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);
  const resetFilters = useFilterStore((state) => state.resetFilters);

  const { data: filtersData } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });
  console.log(filtersData);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        ...filters,
        location: filters.location ?? "",
      }}
      onSubmit={(values) => {
        setFilters(values);
        console.log(values);
      }}
    >
      {(formik) => (
        <form className={css.sidebar} onSubmit={formik.handleSubmit}>
          <div className={css.fieldGroup}>
            <label className={css.label}>Location</label>
            <div className={css.inputWrapper}>
              <FaRegMap size={20} className={css.iconMap} />
              <Field type="text" name="location" className={css.input} />
            </div>
            <div className={css.filterWrapper}>
              <h2 className={css.filterTitle}>Filters</h2>

              <fieldset className={css.filterFieldset}>
                <legend className={css.checkboxDescription}>Camper form</legend>
                {filtersData?.forms.map((form) => (
                  <label key={form} className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="form"
                      value={form}
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>
                      {form[0].toUpperCase() + form.slice(1).replace("_", " ")}
                    </span>
                  </label>
                ))}
              </fieldset>
              <fieldset className={css.filterFieldset}>
                <legend className={css.checkboxDescription}>Engine</legend>
                {filtersData?.engines.map((engine) => (
                  <label key={engine} className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="engine"
                      value={engine}
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>
                      {engine[0].toUpperCase() +
                        engine.slice(1).replace("_", " ")}
                    </span>
                  </label>
                ))}
              </fieldset>
              <fieldset className={css.filterFieldset}>
                <legend className={css.checkboxDescription}>
                  Transmission
                </legend>
                {filtersData?.transmissions.map((transmission) => (
                  <label key={transmission} className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="transmission"
                      value={transmission}
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>
                      {transmission[0].toUpperCase() +
                        transmission.slice(1).replace("_", " ")}
                    </span>
                  </label>
                ))}
              </fieldset>
            </div>
          </div>

          <div className={css.buttonWrapper}>
            <button type="submit" className={css.btnSearch}>
              Search
            </button>
            <button
              type="button"
              onClick={() => {
                formik.setValues({
                  ...formik.values,
                  form: null,
                  engine: null,
                  transmission: null,
                });
                resetFilters();
              }}
              className={css.buttonClear}
            >
              <IoClose size={24} />
              Clear filters
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
