import React, { memo, FC } from "react";
import { Metadata } from "next";
import styles from "./resume.module.scss";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "K.L. Prasanna Kumar | Resume",
  description: "View my resume in this page",
};

const Resume: FC = () => (
  <section className={styles.pdfContainer}>
    <iframe
      src={process.env.RESUME || ""}
      width="100%"
      key="unique-iframe-key"
      className={classNames(styles.pdf, "animate-fade-in")}
      title="resume"
      tabIndex={0}
    />
  </section>
);

export default memo(Resume);
