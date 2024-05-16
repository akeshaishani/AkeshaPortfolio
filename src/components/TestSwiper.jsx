import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import categoriesData from "../json/categories.json";
//import projectsData from "../json/projects.json";

export default function TestSwiper() {
  const [activeCategoryId, setActiveCategoryId] = useState();
  const swiperRef = useRef();

  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };



  return (
    <div className="border max-w-6xl mx-auto">
      <h1 className="text-2xl text-white text-center py-2">
        this is the swiper
      </h1>
      <Swiper
        // install Swiper modules
        modules={[FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7.5,
          },
        }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={handleCategoryChange}
      >
        {categoriesData.map((categories) => (
          <SwiperSlide className="border-2 border-white text-white text-2xl text-center">
            <div key={categories.id}></div>
            <p>{categories.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
