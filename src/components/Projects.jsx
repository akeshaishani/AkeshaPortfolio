import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode} from "swiper/modules";

import categoriesData from "../json/categories.json";
import projectsData from "../json/projects.json";

export default function Projects() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="text-white">
      <div className='className="max-w-6xl mx-auto"'>
        <div className="flex items-baseline items-center justify-center">
          <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow mb-8">
            My Projects
          </h1>
          <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
        </div>
        <div className="flex justify-center items-center px-[2rem] py-[2rem] max-w-6xl mx-auto">
          <button className="flex justify-between max-w-6xl mx-auto">
            <Swiper
              slidesPerView={6.5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper h-[4rem]"
            >
              {categoriesData.map((categories) => (
                <SwiperSlide key={categories.id}>
                  <div
                    key={categories.id}
                    className={`border rounded-md px-3 py-2 flex text-center hover:bg-white hover:text-black hover:font-medium ${categories.id === selectedCategoryId && "text-black bg-white font-medium"}`}
                    onClick={() => handleCategoryClick(categories.id)}
                  >
                    <p className="text-center w-full">{categories.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </button>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-4 justify-between">
          {projectsData
            .filter((projects) => projects.category_id === selectedCategoryId)
            .map((Projects) => (
              <div key={Projects.id}>
                <img src={Projects.url} alt={Projects.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
