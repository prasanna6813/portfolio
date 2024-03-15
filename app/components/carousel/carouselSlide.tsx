import React from "react";
import Image from "next/image";
import styles from "./carousel.module.scss";
import classNames from "classnames";

function CarouselSlide({ slideData }: any) {
  return (
    <a href={slideData?.href} target="_blank" rel="noopener noreferrer">
      <div className={styles.slide}>
        <Image
          src={slideData?.image}
          alt={slideData?.title}
          height="400"
          width="350"
          className={styles.slideImage}
        />
        <h4 className={styles.slide_title}>{slideData?.title}</h4>
      </div>
    </a>
  );
}

export default CarouselSlide;
