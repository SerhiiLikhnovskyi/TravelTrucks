"use client";
import { getReviews } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import css from "./Reviews.module.css";
import { FaStar } from "react-icons/fa";

export default function Reviews({ camperId }: { camperId: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => getReviews(camperId),
  });
  return (
    <div>
      <section>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
        <div className={css.reviewWrapper}>
          {data?.map((review) => {
            const AvatarLetters =
              review.reviewer_name?.[0]?.toUpperCase() ?? "";
            console.log(AvatarLetters);
            return (
              <div key={review.id} className={css.reviewList}>
                <div className={css.upperReviews}>
                  <div className={css.reviewerAvatar}>
                    <span className={css.avatar}>{AvatarLetters}</span>
                  </div>
                  <div>
                    <h3 className={css.titleReview}>{review.reviewer_name}</h3>
                    <div className={css.rating}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={
                            star <= review.reviewer_rating
                              ? css.starActive
                              : css.star
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={css.comment}>{review.comment}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
