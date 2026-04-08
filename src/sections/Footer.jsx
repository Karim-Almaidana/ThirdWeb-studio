import { FaLongArrowAltRight } from "react-icons/fa";
const Footer = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-between gap-5 text-sm text-neutral-400 c-space overflow-hidden pb-30 relative"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-offset="300"
    >
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="">
        <h1 className="text-3xl text-white mb-2">Web3 product studio</h1>
        <p className="text-base max-w-sm">
          Feel free to reach out if you want to collaborate with us, or simply
          have a chat.
        </p>
        <a className="flex items-center gap-1 text-lg text-white mt-5">
          hello@thirdweb.studio <FaLongArrowAltRight />
        </a>
      </div>
      <div className="flex flex-col">
        <p className=" text-white text-sm mb-2">Our projects</p>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          WingRiders
        </a>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          Tracking
        </a>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          Worldcoin
        </a>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          Audience+
        </a>
      </div>
      <div className="flex flex-col mt-2">
        <p className=" text-white text-sm mb-2">Follow us</p>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          Facebook
        </a>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          Instagram
        </a>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          LinkedIn
        </a>
        <a href="#" className="text-white/70 text-xs mb-1 ml-2">
          Dribbble
        </a>
      </div>
      <a href="#home" className="max-w-3 flex flex-col text-wrap gap-1 mr-3">
        <FaLongArrowAltRight className="-rotate-90 size-5 text-white" /> back to
        top
      </a>
      <div className="hidden lg:block absolute w-[590px] h-[590px] bg-[#3EFFB4] rounded-full top-[194px] left-[280px] -z-50 " />
      <div className="hidden lg:block absolute w-[390px] h-[390px] bg-[#53a0fd] rounded-full -z-49 left-[661px] top-[74px] " />
      <div className="hidden lg:block absolute w-[590px] h-[590px] bg-[#3023ae] rounded-full -z-48 left-[641px] top-[210px] " />
    </section>
  );
};

export default Footer;
