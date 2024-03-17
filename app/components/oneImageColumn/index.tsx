import React, { FC, memo } from "react";
import styles from "./oneImageColumn.module.scss";
import classNames from "classnames";
import Image from "next/image";

const OneImageColumn: FC = ({
  title,
  description,
  role,
  image,
  image_position,
  href,
}: any) => {
  return (
    <div
      className={classNames(
        styles.oneImageColumn,
        image_position == "right" ? null : styles.oneImageColumn_reverse,
      )}>
      <div className={styles.text_container}>
        {title && <h2 className={styles.main_header}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        {role && <p className={styles.description}>{role}</p>}
      </div>
      <a
        className={styles.image_container}
        href={href}
        target="_blank"
        rel="noopener noreferrer">
        <Image
          alt="oneImageColumn-image"
          src={image}
          className={styles.image}
          width="300"
          height="400"
        />
      </a>
    </div>
  );
};

export default memo(OneImageColumn);
