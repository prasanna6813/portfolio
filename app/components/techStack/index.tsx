import React from "react";
import { techStackData } from "./dummyData";
import styles from "./techStack.module.scss";
import Image from "next/image";
import classNames from "classnames";

function TechStack() {
  return (
    <section className={styles.techStackWrapper}>
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.techStack}>
        {techStackData.map((tech, index) => {
          return (
            <Image
              src={tech.icon}
              alt={tech.name}
              height="82"
              width="82"
              className={classNames(
                styles.techIcon,
                "transform transition duration-300 hover:scale-125",
              )}
              key={`tech_${index}`}
              title={tech.name}
              unoptimized={true}
            />
          );
        })}
      </div>
    </section>
  );
}

export default TechStack;
