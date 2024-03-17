"use client"
import React from "react";
import ProjectSlides from "../components/carousel";
import OneImageColumn from "../components/oneImageColumn";
import { oneColumnProjectlist } from "./dummyData";

function Projects() {
  return (
    <section>
      <ProjectSlides />
      {oneColumnProjectlist?.map((data, index) => (
        <OneImageColumn {...data} key={`oneColumn_${index}`} />
      ))}
    </section>
  );
}

export default Projects;
