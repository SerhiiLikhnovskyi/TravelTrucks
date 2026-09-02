import { Camper } from "@/lib/api/api";
import css from "./Catalog.module.css";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { IoMdCar } from "react-icons/io";
import { BiSitemap } from "react-icons/bi";
import { BsFuelPump } from "react-icons/bs";

interface CatalogCardProps {
  camper: Camper;
}

export default function CatalogCard({ camper }: CatalogCardProps) {
  return (
    <>
      <article className={css.card}>
        <Image
          className={css.cardImage}
          src={camper.coverImage}
          width={219}
          height={240}
          alt={camper.name}
        />
        <div className={css.wrapper}>
          <div className={css.content}>
            <div className={css.header}>
              <h2 className={css.title}>{camper.name}</h2>
              <p className={css.price}>€{camper.price}</p>
            </div>
            <div className={css.reviews}>
              <p>
                <FaStar color="#ffc531" size={16} />
                {camper.rating}({camper.totalReviews} Reviews)
              </p>
              <p className={css.locationText}>
                <FiMap size={16} />
                {camper.location.split(", ").reverse().join(", ")}
              </p>
            </div>
          </div>

          <p className={css.description}>{camper.description}</p>

          <ul className={css.cardList}>
            <li className={css.cardItem}>
              <BsFuelPump size={20} />
              {camper.engine[0].toUpperCase() +
                camper.engine.slice(1).replace("_", " ")}
            </li>
            <li className={css.cardItem}>
              <BiSitemap size={20} />
              {camper.transmission[0].toUpperCase() +
                camper.transmission.slice(1).replace("_", " ")}
            </li>
            <li className={css.cardItem}>
              <IoMdCar size={20} />
              {camper.form[0].toUpperCase() +
                camper.form.slice(1).replace("_", " ")}
            </li>
          </ul>

          <button type="button" className={css.btnShowMore}>
            Show more
          </button>
        </div>
      </article>
    </>
  );
}
