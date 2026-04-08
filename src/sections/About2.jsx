import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // استهداف جميع المسارات داخل الـ SVGs
    const paths = el.querySelectorAll("svg path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.setProperty("--len", length);
      // ضبط الـ dasharray والـ offset بناءً على طول المسار
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-svgs");
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
  }, []);

  // animation
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);

    AOS.init();
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-center min-h-screen c-space relative flex-col md:mt-50 overflow-hidden"
    >
      <svg
        width="286"
        height="287"
        viewBox="0 0 286 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-30 top-20 right-20 md:w-45 md:top-7 lg:w-50 lg:top-10 svg-item"
      >
        <g clipPath="url(#clip0_27_6127)">
          <path
            d="M1.20508 286.5L1.75707 285.946L1.4029 285.593L4.20682 282.779L4.56099 283.132L7.36491 280.319L7.01074 279.966L9.81467 277.152L10.1688 277.505L12.9727 274.691L12.6186 274.338L15.4225 271.525L15.7766 271.877L18.5806 269.064L18.2264 268.711L21.0303 265.897L21.3845 266.25L24.1884 263.436L23.8342 263.083L26.6381 260.27L26.9923 260.623L29.7962 257.809L29.4421 257.456L32.246 254.642L32.6002 254.995L35.4041 252.181L35.0499 251.828L37.8538 249.015L38.208 249.368L41.0119 246.554L40.6578 246.201L43.4617 243.387L43.8159 243.74L46.6198 240.926L46.2656 240.574L49.0695 237.76L49.4237 238.113L52.2276 235.299L51.8735 234.946L54.6774 232.132L55.0315 232.485L57.8355 229.672L57.4813 229.319L60.2852 226.505L60.6394 226.858L63.4433 224.044L63.0891 223.691L65.8931 220.877L66.2472 221.23L69.0511 218.417L68.697 218.064L71.5009 215.25L71.8551 215.603L74.659 212.789L74.3048 212.436L77.1087 209.623L77.4629 209.975L80.2668 207.162L79.9127 206.809L82.7166 203.995L83.0708 204.348L85.8747 201.534L85.5205 201.181L88.3244 198.368L88.6786 198.721L91.4825 195.907L91.1283 195.554L93.9323 192.74L94.2864 193.093L97.0903 190.279L96.7362 189.926L99.5401 187.113L99.8943 187.466L102.698 184.652L102.344 184.299L105.148 181.485L105.502 181.838L108.306 179.025L107.952 178.672L110.756 175.858L111.11 176.211L113.914 173.397L113.56 173.044L116.364 170.23L116.718 170.583L119.522 167.77L119.168 167.417L121.972 164.603L122.326 164.956L125.13 162.142L124.775 161.789L127.579 158.976L127.934 159.328L130.737 156.515L130.383 156.162L133.187 153.348L133.541 153.701L136.345 150.887L135.991 150.534L138.795 147.721L139.149 148.074L141.953 145.26L141.599 144.907L144.403 142.093L144.757 142.446L147.561 139.632L147.207 139.28L150.011 136.466L150.365 136.819L153.169 134.005L152.815 133.652L155.619 130.838L155.973 131.191L158.777 128.378L158.422 128.025L161.226 125.211L161.581 125.564L164.384 122.75L164.03 122.397L166.834 119.583L167.188 119.936L169.992 117.123L169.638 116.77L172.442 113.956L172.796 114.309L175.6 111.495L175.246 111.142L178.05 108.329L178.404 108.682L181.208 105.868L180.854 105.515L183.658 102.701L184.012 103.054L186.816 100.24L186.462 99.8873L189.266 97.0736L189.62 97.4265L192.424 94.6128L192.069 94.2598L194.873 91.4461L195.228 91.7991L198.032 88.9853L197.677 88.6324L200.481 85.8187L200.835 86.1716L203.639 83.3579L203.285 83.0049L206.089 80.1912L206.443 80.5441L209.247 77.7304L208.893 77.3775L211.697 74.5637L212.051 74.9167L214.855 72.1029L214.501 71.75L217.305 68.9363L217.659 69.2892L220.463 66.4755L220.109 66.1225L222.913 63.3088L223.267 63.6617L226.071 60.848L225.717 60.4951L228.521 57.6813L228.875 58.0343L231.679 55.2206L231.324 54.8676L234.128 52.0539L234.483 52.4068L237.286 49.5931L236.932 49.2401L239.736 46.4264L240.09 46.7793L242.894 43.9656L242.54 43.6127L245.344 40.799L245.698 41.1519L248.502 38.3382L248.148 37.9852L250.952 35.1715L251.306 35.5244L254.11 32.7107L253.756 32.3578L256.56 29.544L256.914 29.897L259.718 27.0832L259.364 26.7303L262.168 23.9166L262.522 24.2695L265.326 21.4558L264.972 21.1028L267.776 18.2891L268.13 18.642L270.934 15.8283L270.579 15.4754L273.383 12.6616L273.738 13.0146L276.541 10.2008L276.187 9.84789L278.991 7.03417L279.345 7.38711L282.149 4.57337L281.795 4.22044L284.599 1.40671L284.953 1.75964L285.501 1.20996V1.99294H286.001V5.97905H285.501V9.96516H286.001V13.9513H285.501V17.9374H286.001V21.9235H285.501V25.9096H286.001V29.8957H285.501V33.8818H286.001V37.868H285.501V41.8541H286.001V45.8402H285.501V49.8263H286.001V53.8124H285.501V57.7985H286.001V61.7846H285.501V65.7707H286.001V69.7568H285.501V73.743H286.001V77.7291H285.501V81.7152H286.001V85.7013H285.501V89.6874H286.001V93.6735H285.501V97.6596H286.001V101.646H285.501V105.632H286.001V109.618H285.501V113.604H286.001V117.59H285.501V121.576H286.001V125.563H285.501V129.549H286.001V133.535H285.501V137.521H286.001V141.507H285.501V145.493H286.001V149.479H285.501V153.465H286.001V157.451H285.501V161.438H286.001V165.424H285.501V169.41H286.001V173.396H285.501V177.382H286.001V181.368H285.501V185.354H286.001V189.34H285.501V193.326H286.001V197.313H285.501V201.299H286.001V205.285H285.501V209.271H286.001V213.257H285.501V217.243H286.001V221.229H285.501V225.215H286.001V229.202H285.501V233.188H286.001V237.174H285.501V241.16H286.001V245.146H285.501V249.132H286.001V253.118H285.501V257.104H286.001V261.09H285.501V265.077H286.001V269.063H285.501V273.049H286.001V277.035H285.501V281.021H286.001V285.007H285.501V286.5H284.015V287H280.043V286.5H276.07V287H272.098V286.5H268.126V287H264.154V286.5H260.182V287H256.209V286.5H252.237V287H248.265V286.5H244.293V287H240.32V286.5H236.348V287H232.376V286.5H228.404V287H224.432V286.5H220.459V287H216.487V286.5H212.515V287H208.543V286.5H204.57V287H200.598V286.5H196.626V287H192.654V286.5H188.682V287H184.709V286.5H180.737V287H176.765V286.5H172.793V287H168.82V286.5H164.848V287H160.876V286.5H156.904V287H152.932V286.5H148.959V287H144.987V286.5H141.015V287H137.043V286.5H133.07V287H129.098V286.5H125.126V287H121.154V286.5H117.182V287H113.209V286.5H109.237V287H105.265V286.5H101.293V287H97.3203V286.5H93.348V287H89.3758V286.5H85.4036V287H81.4314V286.5H77.4591V287H73.4869V286.5H69.5147V287H65.5424V286.5H61.5702V287H57.598V286.5H53.6257V287H49.6535V286.5H45.6813V287H41.7091V286.5H37.7368V287H33.7646V286.5H29.7924V287H25.8201V286.5H21.8479V287H17.8757V286.5H13.9035V287H9.93127V286.5H5.95905V287H1.9868V286.5H1.20508Z"
            stroke="#353535"
            strokeDasharray="4 4"
          />
        </g>
        <defs>
          <clipPath id="clip0_27_6127">
            <rect width="286" height="287" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="287"
        height="287"
        viewBox="0 0 287 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-30 absolute bottom-0 right-10 lg:w-45 lg:right-5 lg:-bottom-4 md:w-40 svg-item"
      >
        <g clipPath="url(#clip0_27_6130)">
          <path
            d="M0.5 143.5C0.5 64.5233 64.5233 0.5 143.5 0.5C222.477 0.5 286.5 64.5233 286.5 143.5V286.5H0.5V143.5Z"
            stroke="#353535"
          />
        </g>
        <defs>
          <clipPath id="clip0_27_6130">
            <rect width="287" height="287" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="414"
        height="414"
        viewBox="0 0 414 414"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-60 -left-55 bottom-10 md:-left-75 lg:-left-55 svg-item"
      >
        <g clipPath="url(#clip0_27_6133)">
          <path d="M413.5 0.5H0.5V413.5H413.5V0.5Z" stroke="#353535" />
        </g>
        <defs>
          <clipPath id="clip0_27_6133">
            <rect width="414" height="414" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <img
        src="assets/about1.jpg"
        alt=""
        className="absolute w-3/15 right-25 top-30 sm:w-2/13 sm:top-31 md:w-3/23 md:hidden"
        data-aos="fade-zoom-in"
        data-aos-offset="150"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
      />
      <img
        src="assets/about2.jpg"
        alt=""
        className="absolute w-40 bottom-20 left-0 md:w-45 md:left-60 md:bottom-10 lg:left-[27%] lg:w-50 lg:bottom-10"
        data-aos="fade-zoom-in"
        data-aos-offset="10"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
      />
      <img
        src="assets/about3.jpg"
        alt=""
        className="absolute w-3/17 bottom-25 right-23 sm:w-2/13 md:w-3/20 md:bottom-20 md:right-25 sm:bottom-25 sm:right-20 lg:bottom-15 lg:w-2/17"
        data-aos="fade-zoom-in"
        data-aos-offset="10"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
      />

      <div className="flex flex-row items-start justify-center gap-16 relative z-10">
        <img
          src="assets/about1.jpg"
          alt=""
          className="w-1/5 lg:w-1/7 hidden md:block"
          data-aos="fade-zoom-in"
          data-aos-offset="170"
          data-aos-easing="ease-in-back"
          data-aos-duration="1000"
        />
        <div>
          <h1
            className="text-6xl mb-10"
            data-aos={isMobile ? "fade-right" : "fade-zoom-in"}
            data-aos-easing={isMobile ? "ease-in-sine" : "ease-in-back"}
            data-aos-offset={isMobile ? "250" : "150"}
            data-aos-duration={isMobile ? "1000" : ""}
          >
            About
          </h1>
          <p
            className="text-neutral-400 text-lg md:text-lg text-pretty text-start ml-4 lg:max-w-lg md:ml-0 md:max-w-sm"
            data-aos={isMobile ? "fade-right" : "fade-zoom-in"}
            data-aos-easing={isMobile ? "ease-in-sine" : "ease-in-back"}
            data-aos-offset={isMobile ? "250" : "150"}
            data-aos-duration={isMobile ? "800" : ""}
          >
            Team of product and brand designers that are really passionate about
            blockchain technology and good design. We are not just UI freaks! We
            advocate users for better product experience and common sense.
          </p>
          <a
            href="#"
            className="text-left ml-4 mt-6 hover-animation text-white flex gap-2 items-center text-lg font-extralight md:ml-0"
            data-aos={isMobile ? "fade-right" : "fade-zoom-in"}
            data-aos-easing={isMobile ? "ease-in-sine" : "ease-in-back"}
            data-aos-offset={isMobile ? "250" : "150"}
            data-aos-duration={isMobile ? "800" : ""}
          >
            More about us <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About2;
