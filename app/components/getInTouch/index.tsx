"use client";
import { useState, useCallback, ChangeEvent, memo, FormEvent } from "react";
import styles from "./getInTouch.module.scss";
import classNames from "classnames";
import Image from "next/image";
import isValidEmail from "@/app/utils/isEmailValid";
import { getInTouchData } from "./dummyData";
import ContactForm from "./contactForm";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouchContainer}>
      <h2 className={styles.title}>{getInTouchData.title}</h2>
      <p className={styles.text}>{getInTouchData.description}</p>
      <ContactForm />
      <hr />
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <span>{"contact me "}</span>
          <a
            href="https://www.linkedin.com/in/prasanna-kumar-03a446105/"
            className={styles.contactInfo}>
            <Image
              src="/social/linkedin.svg"
              height="26"
              width="32"
              alt="email"
            />
          </a>
          <a
            href="mailto:prasanna6813@gmail.com"
            className={styles.contactInfo}
            title="prasanna6813@gmail.com">
            <Image src="/social/mail.svg" height="26" width="32" alt="email" />
          </a>
          <a
            href="https://www.facebook.com/prasannakumar.kamjula.5/"
            className={styles.contactInfo}
            title="prasanna6813@gmail.com">
            <Image
              src="/social/facebook.svg"
              height="26"
              width="32"
              alt="email"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(GetInTouch);
