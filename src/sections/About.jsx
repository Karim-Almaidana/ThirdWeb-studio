import React from "react";

const About = () => {
  return (
    <section
      className="c-space min-h-screen flex flex-col md:flex-row items-center justify-center relative mt-0"
      id="about"
    >
      <img
        className="absolute -z-50 w-80 h-110 -right-45 top-54 lg:h-[110%] lg:w-140 lg:-right-70 lg:-top-10 opacity-70 sm:h-full sm:w-100 sm:top-20"
        src="assets/aboutBG.png"
        alt=""
      />
      <div className="md:w-3/7">
        <h1
          className="text-4xl font-bold mb-10 text-center md:text-start md:min-w-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="200"
        >
          What is Web3 studio?
        </h1>
        <p
          className="text-center text-neutral-400 text-lg lg:text-lg text-pretty md:text-start lg:w-11/12"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="250"
        >
          Things around crypto, NFTs and web3 as a whole are unbelievably
          interesting. Unfortunately, the overall usability as well as the
          quality of the UI is often still not up to the task. To achieve mass
          adoption, overcoming those hurdles will be key. And this is where our
          story begins.
        </p>
      </div>
      <div
        className="flex items-center justify-center relative md:mt-30"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="300"
        data-aos-delay="200"
      >
        <svg
          width="594"
          height="216"
          viewBox="0 0 594 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5"
        >
          <path
            d="M593 107.717C593 167.204 544.77 215.433 485.283 215.433C417.936 215.433 350.628 161.595 296.75 107.717C242.872 53.8385 175.564 0 108.216 0C48.7295 0 0.5 48.2295 0.5 107.717C0.5 167.204 48.7295 215.433 108.216 215.433C175.564 215.433 242.872 161.595 296.75 107.717C350.628 53.8385 417.936 0 485.283 0C544.77 0 593 48.2295 593 107.717Z"
            stroke="white"
            stroke-miterlimit="10"
            stroke-linecap="square"
          />
        </svg>
        <p className="absolute w-30 md:right-10 md:text-lg right-15 font-extralight md:font-light sm:text-lg sm:right-18 lg:right-19">
          High-quality design craft
        </p>
        <p className="absolute md:text-base w-39 left-15 lg:left-19 md:left-10 font-extralight sm:text-lg sm:left-18 lg:left-23">
          Passion in the new wave of crypto
        </p>
      </div>
    </section>
  );
};

export default About;
