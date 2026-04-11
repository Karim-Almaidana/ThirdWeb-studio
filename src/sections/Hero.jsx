import hero from "/assets/hero.jpg";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="flex items-start justify-center w-full min-h-screen overflow-hidden c-space relative"
      id="home"
    >
      <motion.div
        className="absolute w-120 h-150 lg:w-250 lg:h-150 -z-50 -top-35 right-0 lg:top-5 lg:-right-33 -rotate-20 lg:-rotate-0 md:right-40"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1.4 }}
      />
      <motion.h1
        className="absolute md:text-7xl lg:text-8xl text-end top-[390px] text-5xl font-bold lg:top-35 lg:left-10 md:-bottom-40 md:left-22 md:text-6xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Design studio <br />
        for the <br />
        web3 world
      </motion.h1>
      <div className="hidden sm:flex items-center justify-center gap-6">
        <FaArrowDownLong />
        <p>
          We help companies design their products to be ready for web3 world
        </p>
      </div>
      <motion.div
        className="flex items-center justify-center gap-6 absolute bottom-20 font-light w-80 left-8 md:bottom-10"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay:1, duration: 2 }}
      >
        <FaArrowDownLong className="size-7 font-extralight subtext" />
        <p className="font-light subtext">
          We help companies design their products to be ready for web3 world
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
