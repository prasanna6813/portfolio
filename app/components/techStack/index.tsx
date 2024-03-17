import React, { FC, memo } from "react";
import { techStackData } from "./dummyData";
import styles from "./techStack.module.scss";
import Image from "next/image";
import classNames from "classnames";

const TechStack: FC = () => {
  return (
    <section
      className={styles.techStackWrapper}
      data-category="Technical Skills">
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.techStack}>
        {techStackData.map((tech, index) => {
          return (
            <Image
              src={tech.icon}
              alt={tech.name}
              height="72"
              width="72"
              layout="fixed"
              className={classNames(
                styles.techIcon,
                "transform transition duration-300 hover:scale-125",
              )}
              key={`tech_${index}`}
              title={tech.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default memo(TechStack);
