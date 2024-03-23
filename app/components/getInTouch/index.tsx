import React, { memo, FC } from "react";
import styles from "./getInTouch.module.scss";
import { getInTouchData } from "./dummyData";
import ContactForm from "./contactForm";
import ContactMe from "./contactMe";
const GetInTouch: FC = () => {
  return (
    <div className={styles.getInTouchContainer}>
      <h2 className={styles.title}>{getInTouchData.title}</h2>
      <p className={styles.text}>{getInTouchData.description}</p>
      <ContactForm />
      <hr />
      <ContactMe />
    </div>
  );
};

export default memo(GetInTouch);
