import React from "react";
import css from "./Details.module.css";
import { Camper } from "@/types/types";

type Props = {
  camper: Camper;
};
export default function Details({ camper }: Props) {
  return (
    <div className={css.details}>
      <h2>Vehicle details</h2>
      <ul className={css.list}>
        {camper.amenities.map((amenity) => {
          const formattedAmenity =
            amenity.length < 3
              ? amenity.toUpperCase()
              : amenity[0].toUpperCase() + amenity.slice(1);

          return (
            <li className={css.listItem} key={amenity}>
              {formattedAmenity}
            </li>
          );
        })}
      </ul>

      <div className={css.description}>
        <ul className={css.descriptionDetails}>
          <li className={css.detailItem}>
            <span>Form</span>
            <span>
              {camper.form[0].toUpperCase() +
                camper.form.slice(1).replace("_", " ")}
            </span>
          </li>
          <li className={css.detailItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li className={css.detailItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li className={css.detailItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li className={css.detailItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li className={css.detailItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
