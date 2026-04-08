import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div
      className="bg-black py-8 w-full min-h-[25vh] md:min-h-screen"
      data-aos="fade-zoom-in"
      data-aos-offset="250"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Swiper
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.4, spaceBetween: 18 },
            768: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 2.7, spaceBetween: 24 },
            1280: { slidesPerView: 3.3, spaceBetween: 26 },
          }}
        >
          {["slide1", "slide2", "slide3", "slide2", "slide3", "slide1"].map(
            (item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 rounded-lg overflow-hidden h-56 sm:h-64 md:h-62 lg:h-67">
                  <img
                    src={`assets/${item}.jpg`}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>

        <div className="flex flex-row justify-between items-center mt-6 w-full select-none gap-4">
          <div className="custom-pagination flex gap-2 items-center"></div>

          <div className="flex gap-4 sm:gap-6 justify-end">
            <div
              className={`button-prev cursor-pointer text-2xl sm:text-3xl p-2 sm:p-3 bg-transparent rounded-lg transition-all ${isBeginning ? "text-white/10" : "text-white"}`}
              aria-label="Previous slide"
            >
              ❮
            </div>
            <div
              className={`button-next cursor-pointer text-2xl sm:text-3xl p-2 sm:p-3 bg-transparent rounded-lg transition-all ${isEnd ? "text-white/10" : "text-white"}`}
              aria-label="Next slide"
            >
              ❯
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
