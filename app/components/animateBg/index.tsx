import React from "react";
import classNames from "classnames";
import styles from "./animatebg.module.scss";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className={classNames(
          styles.animateGradient,
          "absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500",
        )}></div>
    </div>
  );
};

export default AnimatedBackground;
