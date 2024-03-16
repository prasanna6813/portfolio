import React from "react";
import styles from "./aboutMe.module.scss";
import Image from "next/image";
import classNames from "classnames";

function AboutMe() {
  return (
    <section className={styles.aboutMeWrapper}>
      <div>
        <h2 className={styles.title}>AboutMe</h2>
        <article className={styles.about}>
          Hello! My name is K.L. Prasanna Kumar, and I am a Software Engineer
          currently employed at OSI Digital, where I am actively acquiring new
          skills. As a self-taught developer, I enjoy creating innovative
          projects aimed at simplifying tasks for users. I am seeking a web
          developer position where I can further cultivate my skills and
          continue to grow professionally.
        </article>
      </div>
      <Image
        src="/social/myPic.jpg"
        height="600"
        width="400"
        alt="myPic"
        style={{ transform: "translate3d(0, 0, 0)" }}
        className={classNames(styles.animateTada,"rounded-lg mr-3")}
      />
    </section>
  );
}

export default AboutMe;
