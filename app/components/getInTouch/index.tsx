import React, { memo, FC } from "react";
import styles from "./getInTouch.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { getInTouchData, socialLister } from "./dummyData";
import ContactForm from "./contactForm";

const GetInTouch: FC = () => {
  return (
    <div className={styles.getInTouchContainer}>
      <h2 className={styles.title}>{getInTouchData.title}</h2>
      <p className={styles.text}>{getInTouchData.description}</p>
      <ContactForm />
      <hr />
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <span>{"contact me "}</span>
          {socialLister.map((item, index) => (
            <a
              href={item.href}
              title={item.title}
              target="_blank"
              className={classNames(
                styles.contactInfo,
                "transform transition duration-300 hover:scale-125",
              )}
              key={`social_${index}`}>
              <Image
                src={item.image}
                height="26"
                width="32"
                alt={`${item.title}_image`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(GetInTouch);
