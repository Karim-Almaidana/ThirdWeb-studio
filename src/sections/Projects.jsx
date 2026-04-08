import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);

    AOS.init();
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <section className="c-space min-h-screen scroll-mt-20" id="career">
      <h1
        className="text-6xl text-start"
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:auto-rows-[9rem] md:auto-rows-[6rem] mt-12 ">
        <div
          className="bg-[#08A266] grid-1 "
          data-aos={isMobile ? "fade-left" : "fade-zoom-in"}
          data-aos-easing={isMobile ? undefined : "ease-in-back"}
          data-aos-offset={isMobile ? "250" : "100"}
          data-aos-duration={isMobile ? "2000" : ""}
        >
          <img
            src="assets/phone1.png"
            className="object-contain h-full w-full md:object-cover absolute lg:top-3 lg:object-contain"
            alt=""
          />
        </div>
        <div
          className="bg-[#CCC2E2] grid-2 relative"
          data-aos={isMobile ? "fade-right" : "fade-zoom-in"}
          data-aos-easing={isMobile ? "ease-in-sine" : "ease-in-back"}
          data-aos-offset={isMobile ? "250" : "150"}
          data-aos-duration={isMobile ? "2000" : ""}
        >
          <img
            src="assets/phone2.png"
            className="absolute lg:top-[6px] object-contain h-full w-full "
            alt=""
          />
        </div>
        <div
          className="grid-3"
          data-aos={isMobile ? "fade-left" : "fade-zoom-in"}
          data-aos-easing={isMobile ? undefined : "ease-in-back"}
          data-aos-offset={isMobile ? "250" : "100"}
          data-aos-duration={isMobile ? "2000" : ""}
        >
          <img src="assets/pro-summary.jpg" className="" alt="" />
        </div>
        <div
          className="grid-4"
          data-aos={isMobile ? "fade-right" : "fade-zoom-in"}
          data-aos-easing={isMobile ? "ease-in-sine" : "ease-in-back"}
          data-aos-offset={isMobile ? "250" : "70"}
          data-aos-duration={isMobile ? "2000" : ""}
        >
          <img
            src="assets/audiencePlus.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div
          className="grid-5 bg-white/10 flex items-center justify-center flex-col md:items-start p-5"
          data-aos={isMobile ? "fade-left" : "fade-zoom-in"}
          data-aos-easing={isMobile ? undefined : "ease-in-back"}
          data-aos-offset={isMobile ? "250" : "40"}
          data-aos-duration={isMobile ? "2000" : ""}
        >
          <h1 className="text-2xl font-bold lg:text-4xl md:font-medium md:text-xl">
            How we design web3 products
          </h1>
          <button className="btn bg-black hover:bg-black/60 mt-5 font-light">
            coming soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
