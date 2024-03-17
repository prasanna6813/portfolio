"use client";
import React, { memo } from "react";
import styles from "./aboutMe.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { aboutMeData } from "./dummyData";

function AboutMe() {
  return (
    <section className={styles.aboutMeWrapper}>
      <div>
        <h2 className={styles.title}>{aboutMeData.title}</h2>
        <article className={styles.about}>{aboutMeData.discription}</article>
      </div>
      <Image
        src={aboutMeData.image}
        height="600"
        width="400"
        alt="myPic"
        className= "rounded-lg transform transition duration-300 hover:scale-110"
      />
    </section>
  );
}

export default memo(AboutMe);
