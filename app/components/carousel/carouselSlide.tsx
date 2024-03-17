import React, { FC } from "react";
import Image from "next/image";
import styles from "./carousel.module.scss";

const CarouselSlide: FC = ({ title, image, href }: any) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={styles.slide}>
        <Image
          src={image}
          alt={title}
          height="400"
          width="350"
          className={styles.slideImage}
        />
        <h4 className={styles.slide_title}>{title}</h4>
      </div>
    </a>
  );
};

export default CarouselSlide;
