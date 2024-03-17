import React, { FC } from "react";
import ProjectSlides from "../components/carousel";
import OneImageColumn from "../components/oneImageColumn";
import { oneColumnProjectlist } from "./dummyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description:
    "View my projects in this page",
};

const Projects: FC = () => {
  return (
    <section>
      <ProjectSlides />
      {oneColumnProjectlist?.map((data, index) => (
        <OneImageColumn {...data} key={`oneColumn_${index}`} />
      ))}
    </section>
  );
};

export default Projects;
