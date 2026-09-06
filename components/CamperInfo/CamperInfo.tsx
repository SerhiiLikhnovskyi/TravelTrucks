import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import css from "./CamperInfo.module.css";
import { Camper } from "@/types/types";

type Props = {
  camper: Camper;
};
export default function CamperInfo({ camper }: Props) {
  return (
    <div className={css.content}>
      <h1 className={css.title}>{camper.name}</h1>
      <div className={css.location}>
        <p className={css.textIcon}>
          <FaStar color="#ffc531" size={16} />
          {camper.rating}({camper.totalReviews} Reviews)
        </p>
        <p className={css.textIcon}>
          <FiMap size={16} /> {camper.location.split(", ").reverse().join(", ")}
        </p>
      </div>
      <p className={css.price}>€{camper.price}</p>
      <p className={css.descriptionText}>{camper.description}</p>
    </div>
  );
}
