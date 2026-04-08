import React from "react";
import GeometricBanner from "../components/GeometricBanner";
import Slider from "../components/Carousel";

const Projects2 = () => {
  return (
    <section className="flex items-center justify-center flex-col w-full mt-40 md:mt-40">
      <div className="w-full max-w-6xl px-4 sm:px-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center sm:text-start mb-8"
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
        >
          Other projects
        </h1>
        <Slider />
      </div>
    </section>
  );
};

export default Projects2;
