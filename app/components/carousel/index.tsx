"use client";
import React, { memo } from "react";
import CarouselSlide from "./carouselSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { projectsData } from "./dummyData";
import styles from "./carousel.module.scss";

const Carousel = () => {
  const settingsv2: Settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    className: styles.slickCustomSlide,
    dotsClass: styles.slickCustomDots,
    slidesToShow: 4,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.title}>{projectsData?.title}</h2>
      <p className={styles.discription}>{projectsData?.about}</p>
      <p className={styles.roleDiscription}>{projectsData?.role}</p>
      <Slider {...settingsv2} className={styles.slider}>
        {projectsData?.projectList?.map((slideData: any, index: number) => (
          <CarouselSlide slideData={slideData} key={`CarouselSlide_${index}`} />
        ))}
      </Slider>
    </div>
  );
};

export default memo(Carousel);
