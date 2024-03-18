import React, { memo, FC } from "react";
import styles from "./resume.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Resume",
  description: "View my resume in this page",
};

const Resume: FC = () => {
  return (
    <section className={styles.pdfContainer}>
      <iframe
        src={process.env.RESUME}
        width="100%"
        className={styles.pdf}
        title="resume"
        frameBorder="0"
      />
    </section>
  );
};

export default memo(Resume);
