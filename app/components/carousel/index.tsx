"use client";
import React, { memo } from "react";
import CarouselSlide from "./carouselSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { projectsData } from "./dummyData";
import styles from "./carousel.module.scss";
import classNames from "classnames";

const Carousel = () => {
  const settingsv2: Settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    className: styles.slickCustomSlide,
    dotsClass: styles.slickCustomDots,
    slidesToShow: 4,
    autoplay: true,
    cssEase: "ease-in",

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          fade: true,
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
    <div className={classNames(styles.sliderContainer, "animate-fade-in")}>
      {/* <div className="animate-fade-in"> */}
      <h2 className={classNames(styles.title)}>{projectsData?.title}</h2>
      <p className={styles.discription}>{projectsData?.about}</p>
      <p className={styles.roleDiscription}>{projectsData?.role}</p>
      {/* </div> */}
      <Slider {...settingsv2} className={styles.slider}>
        {projectsData?.projectList?.map((slideData: any, index: number) => (
          <CarouselSlide {...slideData} key={`CarouselSlide_${index}`} />
        ))}
      </Slider>
    </div>
  );
};

export default memo(Carousel);
