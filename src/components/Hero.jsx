import React from "react";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} flex flex-row items-start justify-center lg:justify-normal gap-5 absolute inset-0 top-[120px] max-w-7xl mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I&#39;m <span className="text-[#915eff]">Mostafa</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop 3D visuals, user <br className="hidden sm:block" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="w-full absolute bottom-10 flex justify-center items-center">
        <a href="#about">
          <div className="flex justify-center p-2 w-9 h-16 border-4 border-secondary rounded-3xl">
            <motion.div 
             className="w-3 h-3 rounded-full bg-secondary mb-1"
             animate={{
              y: [0, 25, 0]
             }}
             transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
             }}
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
