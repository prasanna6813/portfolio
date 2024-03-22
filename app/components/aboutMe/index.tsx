import React, { memo, FC } from "react";
import styles from "./aboutMe.module.scss";
import Image from "next/image";
import { aboutMeData } from "./dummyData";
import ScrollDownButton from "./scrollDownButton";

const AboutMe: FC = () => {
  return (
    <section className={styles.aboutMeWrapper}>
      <article data-category="myself">
        <h2 className={styles.title}>{aboutMeData.title}</h2>
        <p className={styles.about}>{aboutMeData.discription}</p>
      </article>
      <Image
        src={aboutMeData.image}
        height="600"
        width="400"
        title="K.L. Prasanna Kumar"
        alt={aboutMeData.altText || "My Picture"}
        className={styles.image}
      />
      <ScrollDownButton className={styles.scrollDownWrapper} />
    </section>
  );
};

export default memo(AboutMe);
