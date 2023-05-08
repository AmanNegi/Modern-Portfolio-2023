import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./intro.css";

function Intro() {
  // const text = "ASTER";
  const [text, setText] = useState("ASTER");

  useEffect(() => {
    return;
  }, []);

  return (
    <section className="h-[100vh] w-[100%] bg-semiDarkBackground relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.5, duration: 3 } }}
        className="absolute top-[40%] left-[31%] z-10 tracking-[5.75vw]"
      >
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-accentColor to-accentColor">
          ASTER
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.5, duration: 3 } }}
        className="absolute top-[70%] left-[43%] z-10"
      >
        <h1 className="text-2xl text-headingColor text-opacity-25">
          Flutter Developer
        </h1>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          x: -10,
          y: 0,
          rotate: 90,
        }}
        animate={{
          scale: 1,
          x: -250,
          y: 0,
          rotate: -45,
          transition: {
            duration: 1,
            delay: 2,
          },
        }}
        className="animatedDiv"
      >
        {AnimatedTextComponent(text.charAt(0))}
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          x: 10,
          y: 0,
          rotate: 0,
        }}
        animate={{
          scale: 1,
          x: 250,
          y: 0,
          rotate: 45,
        }}
        transition={{
          duration: "1",
          delay: 2,
        }}
        className="animatedDiv"
      >
        {AnimatedTextComponent(text.charAt(4))}
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          x: -10,
          rotate: 90,
        }}
        animate={{
          scale: 1,
          x: -100,
          rotate: 135,
        }}
        transition={{
          duration: "1",
          delay: 1,
        }}
        className="animatedDiv"
      >
        {AnimatedTextComponent(text.charAt(1))}
      </motion.div>

      <motion.div
        initial={{
          scale: 0,
          x: 10,
          rotate: 0,
        }}
        animate={{
          scale: 1,
          x: 100,
          rotate: 45,
        }}
        transition={{
          duration: "1",
          delay: 1,
        }}
        className="animatedDiv"
      >
        {AnimatedTextComponent(text.charAt(3))}
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="animatedDiv"
      >
        {AnimatedTextComponent(text.charAt(2))}
      </motion.div>
    </section>
  );
}

function AnimatedTextComponent(text: string) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2.5,
      }}
      className="animatedText"
    >
      {/* {text} */}
    </motion.h1>
  );
}

export default Intro;
