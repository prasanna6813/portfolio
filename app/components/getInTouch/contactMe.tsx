import React, { memo, FC } from "react";
import styles from "./getInTouch.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { socialLister } from "./dummyData";

const ContactMe: FC = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.contactInfo}>
        <span>{"Let's chat "}</span>
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
  );
};

export default memo(ContactMe);
