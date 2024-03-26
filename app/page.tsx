import React, { FC, memo } from "react";
import TechStack from "./components/techStack";
import AboutMe from "./components/aboutMe";
import Timeline from "./components/timeline";

const Home: FC = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-4">
    <AboutMe />
    <TechStack />
    <Timeline />
  </main>
);

export default memo(Home);
