import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import categoriesData from "../json/categories.json";
import projectsData from "../json/projects.json";

export default function Projects() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  // const breakpoints = {
  //   small: 320,
  //   medium: 600,
  //   large: 1024,
  // };

  // const slidesPerView = {
  //   small: 2,
  //   medium: 5,
  //   large: 7.5,
  // };

  // const getSlidesPerView = () => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth >= breakpoints.large) {
  //     return slidesPerView.large;
  //   } else if (screenWidth >= breakpoints.medium) {
  //     return slidesPerView.medium;
  //   } else {
  //     return slidesPerView.small;
  //   }
  // };

  return (
    <div className="text-white">
      <div className='className="max-w-6xl mx-auto"'>
        <div className="flex items-baseline items-center justify-center">
          <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow mb-8">
            My Projects
          </h1>
          <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
        </div>
        <div className="flex justify-center items-center py-[2rem] max-w-6xl mx-auto">
          
            <Swiper
              modules={[FreeMode]}
              
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                600: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 7.5,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={handleCategoryClick}
              className="mySwiper h-[4rem]"
            >
              {categoriesData.map((categories) => (
                <SwiperSlide key={categories.id}>
                  <div
                    key={categories.id}
                    className={`border rounded-md px-3 py-2 flex text-center hover:bg-white hover:text-black hover:font-medium ${
                      categories.id === selectedCategoryId &&
                      "text-black bg-white font-medium"
                    }`}
                    onClick={() => handleCategoryClick(categories.id)}
                  >
                    <p className="text-center w-full">{categories.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          
        </div>
        <div className="flex items-center"><div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-4 justify-between">
          {projectsData
            .filter((projects) => projects.category_id === selectedCategoryId)
            .map((Projects) => (
              <div key={Projects.id}>
                <img src={Projects.url} alt={Projects.name} />
              </div>
            ))}
        </div></div>
        
      </div>
    </div>
  );
}
