import React, { memo, FC } from "react";
import styles from "./resume.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Resume",
  description: "View my resume in this page",
};

const Resume: FC = () => {
  return (
    <section className={styles.iframeContainer}>
      <iframe
        src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=1cYsNxOJi9ncuFcc0l7Y29FcnSF7irSLQ"
        width="100%"
        frameBorder="0"
        className={styles.iframe}
      />
    </section>
  );
};

export default memo(Resume);
