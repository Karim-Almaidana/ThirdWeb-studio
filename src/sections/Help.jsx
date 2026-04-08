import React from "react";
import GeometricBanner from "../components/GeometricBanner";

const Help = () => {
  return (
    <section className="flex items-center justify-center flex-col c-space h-screen w-full relative">
      <img
        className="absolute -z-50 w-80 h-110 -left-45 top-54 lg:h-[110%] lg:w-140 lg:-left-80 lg:top-85  opacity-70 m:h-full sm:w-100 sm:top-60 sm:-left-60 md:h-full"
        src="assets/aboutBG.png"
        alt=""
      />
      <GeometricBanner />
      <div className="w-full h-1/2 flex flex-col mt-30">
        <h1
          className="text-4xl md:text-6xl md:font-medium md:max-w-md md:mb-25 font-bold mb-10"
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
        >
          How we can help grow
        </h1>
        <div className="flex items-start justify-between w-full h-1/3 md:h-3/4">
          <div
            className="flex flex-col gap-4 md:gap-10"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <p className="text-lg font-semibold md:text-3xl md:font-light">
              Product clarity
            </p>
            <p className="text-sm text-neutral-400 ml-4 mb-[1px] md:text-xl">
              UX/UI design
            </p>
            <p className="text-sm text-neutral-400 ml-4 mb-[1px] md:text-xl">
              Maintain process
            </p>
          </div>

          <img
            src="assets/help.jpg"
            alt=""
            className="w-2/7 h-full object-cover"
            data-aos="fade-zoom-in"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          />

          <div
            className="w-1/3 md:w-1/3"
            data-aos="fade-left"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <p className="text-xs font-semibold mb-2 md:mb-4 text-left md:text-2xl md:font-normal">
              Are you at the idea stage? We will help you identify the critical
              MVP product scope.
            </p>
            <p className="text-xs text-neutral-400 ml-4 mb-[1px] md:text-base text-pretty md:text-xl">
              product goal&vision
            </p>
            <p className="text-xs text-neutral-400 ml-4 mb-[1px] md:text-base text-pretty md:text-xl">
              brand voice
            </p>
            <p className="text-xs text-neutral-400 ml-4 mb-[2px] md:text-base text-pretty md:text-xl">
              product positioning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
