import { useEffect } from "react";
import { motion } from "framer-motion";

import "./intro.css";
import { isMobile } from "../../../utils/screen_size";

// OUTDATED: This component is not used anymore

function Intro() {
  // const text = "ASTER";

  useEffect(() => {
    return;
  }, []);

  return (
    <section className="h-[100vh] w-[100%] bg-semiDarkBackground relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.5, duration: 3 } }}
        className="absolute top-[35%] md:top-[40%]  right-[0] left-[30vw] z-10 tracking-[5.75vw]"
      >
        <h1 className="text-2xl font-black text-transparent  md:text-7xl bg-clip-text bg-gradient-to-b from-headingColor via-accentColor to-accentColor">
          ASTER
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.5, duration: 3 } }}
        className="absolute top-[80%] left-[0] right-[0] text-center md:right-[0] z-10"
      >
        <h1 className="text-lg text-opacity-75 md:text-2xl font-extralight text-headingColor">
          Flutter & Web Developer
        </h1>
      </motion.div>
      <BackgroundCards />
    </section>
  );
}

function BackgroundCards() {
  return (
    <>
      <motion.div
        initial={{
          scale: 0,
          x: -10,
          y: 0,
          rotate: 90,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          x: num(-150),
          y: num(100),
          rotate: -75,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2,
          },
        }}
        className="transparentAnimatedDiv border-opacity-20"
      ></motion.div>
      <motion.div
        initial={{
          scale: 0,
          x: 10,
          y: 0,
          rotate: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          x: num(150),
          y: num(100),
          rotate: 75,
          opacity: 1,
        }}
        transition={{
          duration: "1",
          delay: 2,
        }}
        className="transparentAnimatedDiv border-opacity-20 "
      ></motion.div>
      {/* ! Near two elements */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          x: num(-100),
          y: 25,
          rotate: -45,
          opacity: 1,
        }}
        transition={{
          duration: "1",
          delay: 1,
        }}
        className="transparentAnimatedDiv border-opacity-40"
      ></motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: num(100),
          y: 25,
        }}
        animate={{
          opacity: 1,
          rotate: 45,
        }}
        transition={{
          duration: "1",
          delay: 1,
        }}
        className="transparentAnimatedDiv border-opacity-40"
      ></motion.div>

      {/* Bottom Element: Stays same in each layout */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="animatedDiv"
      ></motion.div>
    </>
  );

  // Return number according to screen size
  function num(size: number): number {
    if (isMobile(window)) {
      return size / 2;
    }
    return size;
  }
}

export default Intro;