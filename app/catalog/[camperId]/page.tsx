import Gallery from "@/components/Gallery/Gallery";
import { getCamperById } from "@/lib/api/api";
import React from "react";
import css from "./CamperPage.module.css";
import { FaStar } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import Reviews from "@/components/Reviews/Reviews";
import Form from "@/components/Form/Form";

type Props = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);

  return (
    <main>
      <div className={`container ${css.camperContainer}`}>
        <section className={css.section}>
          <div className={css.topContent}>
            <Gallery gallery={camper.gallery} />
            <div className={css.wrapper}>
              <div className={css.content}>
                <h2 className={css.title}>{camper.name}</h2>
                <div className={css.location}>
                  <p className={css.textIcon}>
                    <FaStar color="#ffc531" size={16} />
                    {camper.rating}({camper.totalReviews} Reviews)
                  </p>
                  <p className={css.textIcon}>
                    <FiMap size={16} />{" "}
                    {camper.location.split(", ").reverse().join(", ")}
                  </p>
                </div>
                <p className={css.price}>€{camper.price}</p>
                <p className={css.descriptionText}>{camper.description}</p>
              </div>

              <div className={css.details}>
                <h2>Vehicle details</h2>
                {/* Виправлено подвійний ul */}
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
