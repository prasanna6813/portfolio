"use client";
import React, { FC, useEffect, memo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import options from "./options.json";
import { loadSlim } from "@tsparticles/slim";

const AnimateBg: FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init && <Particles id="tsparticles" options={options} />;
};

export default memo(AnimateBg);
