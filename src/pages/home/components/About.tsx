import { motion } from "framer-motion";
import { isDesktop, isMobile, isTablet } from "../../../utils/screen_size";

function About() {
  return (
    <section className="h-screen w-[100%] bg-gradient-to-r from-darkBackground to-semiDarkBackground relative">
      <div className="h-[100%] w-[100%] flex flex-col items-start justify-center gap-10 pl-[5vw] md:pl-[15vw]  font-grotesk font-normal">
        <motion.h1
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -500,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="text-4xl lg:text-8xl text-headingColor "
        >
          I'm A Developer,
        </motion.h1>
        <motion.h1
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: 500,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          className="text-4xl lg:text-8xl ml-[25vw] text-accentColor "
        >
          Freelancer,
        </motion.h1>
        <motion.h1
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -500,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.75,
            },
          }}
          className="text-4xl lg:text-8xl text-headingColor "
        >
          Blog Writer,
        </motion.h1>

        <motion.p
          viewport={{ once: true }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
        >
          all working together to make the world a more inclusive place to live
          in.
        </motion.p>
      </div>
      <motion.p
        viewport={{ once: true }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 1,
          },
        }}
        className="absolute bottom-2 left-[15vw] font-grotesk text-sm font-medium text-headingColor text-opacity-50"
      >
        CHECK OUT MY PROJECTS BELOW
      </motion.p>
    </section>
  );
}

export default About;
