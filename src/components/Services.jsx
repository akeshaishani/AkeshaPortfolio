import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import prevbutton from "../assets/buttons/Previous Button.svg";
import nextbutton from "../assets/buttons/Next Button.svg";

import servicesData from "../json/services.json";

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const breakpoints = {
    sm: 320,
    md: 640,
    lg: 1024,
  };

  const slidesPerView = {
    sm: 1,
    md: 2,
    lg: 3.5,
  };

  const currentBreakpoint = Object.keys(breakpoints).find(
    (breakpoint) => window.innerWidth <= breakpoints[breakpoint]
  );

  const currentSlidesPerView =
    slidesPerView[currentBreakpoint] || slidesPerView.lg;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoints.sm);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints.sm]);

  const handleSlideChange = () => {
    setActiveSlide(swiperRef.current.activeIndex);
  };
  const swiperRef = useRef(null);

  return (
    <div className="pb-[4rem] max-w-6xl mx-auto pt-[2rem]">
      <div className="flex items-baseline items-center justify-center">
        <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow mb-8">
          What Can I Do
        </h1>
        <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
      </div>

      <div className="px-6 py-2">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={currentSlidesPerView}
          spaceBetween={10}
          freeMode={isSmallScreen}
          pagination={{
            clickable: false,
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            [breakpoints.sm]: {
              slidesPerView: slidesPerView.sm,
            },
            [breakpoints.md]: {
              slidesPerView: slidesPerView.md,
            },
            [breakpoints.lg]: {
              slidesPerView: slidesPerView.lg,
            },
          }}
          className="mySwiper"
        >
          <div className="px-6">
            <div>
              {servicesData.map((services) => (
                <SwiperSlide key={services.id} className="hover:bg-sliderbule">
                  <div className="w-auto px-2 py-2 border rounded-tr-2xl rounded-bl-2xl text-white">
                    <img
                      src={services.icon}
                      style={{ width: "100px" }}
                      alt=""
                    />
                    <p className="py-2 text-start text-lg">{services.title}</p>
                    <p className="text-start text-base">
                      {services.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>

        <div className="z-10 lg:flex md:hidden sm:hidden justify-end absolute w-full max-w-6xl top-[133rem] pr-4 ">
          <div className="w-1/2 flex justify-start">
            {activeSlide > 0 && ( // Show if not on the first slide
              <div
                onClick={() => swiperRef.current.slidePrev()}
                className="w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer absolute left-[-1rem]"
              >
                <img src={prevbutton} alt="" />
              </div>
            )}
          </div>
          <div className="w-1/2 flex justify-end">
            {activeSlide < servicesData.length - currentSlidesPerView && (
              <div
                onClick={() => swiperRef.current.slideNext()}
                className="w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
              >
                <img src={nextbutton} alt="" className="text-end" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
