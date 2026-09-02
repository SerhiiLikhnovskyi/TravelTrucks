"use client";
import React from "react";
import css from "./Sidebar.module.css";
import { FaRegMap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Field, Formik } from "formik";
import { useFilterStore } from "@/lib/store/useStore";

export default function Sidebar() {
  const setFilters = useFilterStore((state) => state.setFilters);
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const setResetForm = useFilterStore((state) => state.setResetForm);

  return (
    <Formik
      initialValues={{
        location: "",
        form: null,
        engine: null,
        transmission: null,
      }}
      onSubmit={(values) => {
        setFilters(values);
      }}
    >
      {(formik) => {
        setResetForm(formik.resetForm);

        return (
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
                  <legend className={css.checkboxDescription}>
                    Camper form
                  </legend>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="form"
                      value="alcove"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Alcove</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="form"
                      value="panel_van"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Panel Van</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="form"
                      value="integrated"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Integrated</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="form"
                      value="semi_integrated"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Semi Integrated</span>
                  </label>
                </fieldset>

                <fieldset className={css.filterFieldset}>
                  <legend className={css.checkboxDescription}>Engine</legend>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="engine"
                      value="diesel"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Diesel</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="engine"
                      value="petrol"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Petrol</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="engine"
                      value="hybrid"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Hybrid</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="engine"
                      value="electric"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Electric</span>
                  </label>
                </fieldset>
                <fieldset className={css.filterFieldset}>
                  <legend className={css.checkboxDescription}>
                    Transmission
                  </legend>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="transmission"
                      value="automatic"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Automatic</span>
                  </label>
                  <label className={css.checkbox}>
                    <Field
                      className={css.radioInput}
                      type="radio"
                      name="transmission"
                      value="manual"
                    />
                    <span className={css.radioCustom}></span>
                    <span className={css.spanText}>Manual</span>
                  </label>
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
                  formik.resetForm();
                  resetFilters();
                }}
                className={css.buttonClear}
              >
                <IoClose size={24} />
                Clear filters
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
