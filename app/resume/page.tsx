import React, { memo, FC } from "react";
import styles from "./resume.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Resume",
  description: "View my resume in this page",
};

const Resume: FC = () => {
  const resumeLink: string = process.env.RESUME ?? "";
  return (
    <section className={styles.iframeContainer}>
      <iframe
        src={resumeLink}
        width="100%"
        frameBorder="0"
        className={styles.iframe}
      />
    </section>
  );
};

export default memo(Resume);
