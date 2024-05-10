import React, { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import categoriesData from "../json/categories.json";
import projectsData from "../json/projects.json";

export default function TestSwiper() {
  const [activeCategoryId, setActiveCategoryId] = useState();
  const swiperRef = useRef();

  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  const breakpoints = {
    small: 320,
    medium: 600,
    large: 1024,
  };

  const slidesPerView = {
    small: 2,
    medium: 5,
    large: 7.5,
  };

  return (
    <div className="border max-w-6xl mx-auto">
      <h1 className="text-2xl text-white text-center py-2">
        this is the swiper
      </h1>
      <Swiper
        // install Swiper modules
        modules={[FreeMode]}
        spaceBetween={10}
        slidesPerView={3}
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
