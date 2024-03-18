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
      <object
        data="/LakshmiResume.pdf"
        type="application/pdf"
        width="100%"
        className={styles.pdf}
        title="resume">
        <a href="https://drive.google.com/file/d/1cYsNxOJi9ncuFcc0l7Y29FcnSF7irSLQ/view?usp=drive_link">
          view resume
        </a>
      </object>
    </section>
  );
};

export default memo(Resume);
