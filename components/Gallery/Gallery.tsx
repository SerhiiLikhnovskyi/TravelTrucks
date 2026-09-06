"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";
import css from "./Gallery.module.css";
import Image from "next/image";
import { GalleryImage } from "@/types/types";

type Props = {
  gallery: GalleryImage[];
};

export default function Gallery({ gallery }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(
    null,
  );

  return (
    <div className={css.gallery}>
      <Swiper
        navigation
        modules={[Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={css.firstSwiper}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              className={css.mainImage}
              src={image.thumb}
              alt="camper"
              width={638}
              height={505}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={32}
        slidesPerView="auto"
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.secondSwiper}
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              className={css.thumbImage}
              src={image.thumb}
              alt="camper"
              width={136}
              height={144}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
