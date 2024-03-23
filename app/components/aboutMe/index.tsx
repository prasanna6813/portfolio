import React, { memo, FC } from "react";
import styles from "./aboutMe.module.scss";
import Image from "next/image";
import { aboutMeData } from "./dummyData";
import ScrollDownButton from "./scrollDownButton";
import classNames from "classnames";
import ContactMe from "../getInTouch/contactMe";

const AboutMe: FC = () => {
  return (
    <section className={styles.aboutMeWrapper}>
      <article data-category="myself" className="animate-slide-left">
        <h2 className={styles.title}>{aboutMeData.title}</h2>
        <p className={styles.about}>{aboutMeData.discription}</p>
        <div className={styles.contactContainer}>
          <ContactMe />
        </div>
      </article>
      <Image
        src={aboutMeData.image}
        height="600"
        width="400"
        title="K.L. Prasanna Kumar"
        alt={aboutMeData.altText || "My Picture"}
        className={classNames(styles.image, "animate-slide-right")}
      />
      <ScrollDownButton className={styles.scrollDownWrapper} />
    </section>
  );
};

export default memo(AboutMe);
