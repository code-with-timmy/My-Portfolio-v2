"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { useDarkMode } from "./context/DarkModeContext";

/**
 * Props:
 * - id
 * - className
 * - background
 * - particleSize
 * - minSize
 * - maxSize
 * - speed
 * - particleColor
 * - particleDensity
 */
export const SparklesCore = (props) => {
  const { id, className, minSize, maxSize, speed, particleDensity } = props;

  const [init, setInit] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particleColor = isDarkMode ? "#ffffff" : "#000000";

  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={`opacity-0 ${className || ""}`}>
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full bg-transparent"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: false },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: particleColor },
              move: {
                enable: true,
                direction: "none",
                speed: { min: 0.1, max: 0.3 },
                outModes: { default: "out" },
              },
              number: {
                value: particleDensity || 120,
                density: { enable: true, width: 400, height: 400 },
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: speed || 4 },
              },
              shape: { type: "circle" },
              size: { value: { min: minSize || 1, max: maxSize || 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
