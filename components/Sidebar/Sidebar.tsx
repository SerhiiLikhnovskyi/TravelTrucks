"use client";
import React from "react";
import css from "./Sidebar.module.css";
import { FaRegMap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useFormik } from "formik";

export default function Sidebar() {
  const formik = useFormik({
    initialValues: {
      location: "Kyiv",
      camper: "",
      engine: "",
      transmission: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={css.sidebar} onSubmit={formik.handleSubmit}>
      <div className={css.fieldGroup}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <FaRegMap size={20} className={css.iconMap} />
          <input
            type="text"
            name="location"
            className={css.input}
            value={formik.values.location}
            onChange={formik.handleChange}
          />
        </div>
        <div className={css.filterWrapper}>
          <h2 className={css.filterTitle}>Filters</h2>

          <fieldset className={css.filterFieldset}>
            <legend className={css.checkboxDescription}>Camper form</legend>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="camper"
                value="Alcove"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Alcove</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="camper"
                value="Panel Van"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Panel Van</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="camper"
                value="Integrated"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Integrated</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="camper"
                value="Semi Integrated"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Semi Integrated</span>
            </label>
          </fieldset>

          <fieldset className={css.filterFieldset}>
            <legend className={css.checkboxDescription}>Engine</legend>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="Diesel"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Diesel</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="Petrol"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Petrol</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="Hybrid"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Hybrid</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="engine"
                value="Electric"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Electric</span>
            </label>
          </fieldset>
          <fieldset className={css.filterFieldset}>
            <legend className={css.checkboxDescription}>Transmission</legend>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="transmission"
                value="Automatic"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Automatic</span>
            </label>
            <label className={css.checkbox}>
              <input
                className={css.radioInput}
                type="radio"
                name="transmission"
                value="Manual"
                onChange={formik.handleChange}
              />
              <span className={css.radioCustom}></span>
              <span className={css.spanText}>Manual</span>
            </label>
          </fieldset>
        </div>
      </div>
      <div className={css.buttonWrapper}>
        <button className={css.btnSearch}>Search</button>
        <button className={css.buttonClear}>
          <IoClose size={24} />
          Clear filters
        </button>
      </div>
    </form>
  );
}
