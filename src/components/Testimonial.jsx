import React, { useState } from "react";
import clientsData from "../json/testimonial.json";

const Testimonial = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-background-testi bg-center bg-cover bg-scroll pt-[2rem]" style={{ backgroundRepeat: showAll ? "repeat-y" : "no-repeat" }}>
      <div className="max-w-6xl mx-auto justify-center items-center">
        <div className="flex items-baseline items-center justify-center">
          <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow mb-8">
            What Clients Said
          </h1>
          <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 text-white">
          {clientsData.slice(0, showAll ? undefined : 3).map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-cardblue rounded-md">
              <img
                src={testimonial.icon}
                alt="dp"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <p className="text-lg text-center font-medium mb-2">{testimonial.title}</p>
              <p className="text-start text-base">{testimonial.message}</p>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-500 text-white lg:text-lg px-4 py-2 rounded-full focus:outline-none"
            >
              Show More
            </button>
          </div>
        )}
        {showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import prevbutton from "../assets/buttons/Previous Button.svg";
// import nextbutton from "../assets/buttons/Next Button.svg";

// import clientsData from "../json/testimonial.json";

// //import Quote from "../assets/Quotes.png";

// export default function Testimonial() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const breakpoints = {
//     sm: 320,
//     md: 640,
//     lg: 1024,
//   };

//   const slidesPerView = {
//     sm: 1,
//     md: 2,
//     lg: 3,
//   };

//   const currentBreakpoint = Object.keys(breakpoints).find(
//     (breakpoint) => window.innerWidth <= breakpoints[breakpoint]
//   );

//   const currentSlidesPerView =
//     slidesPerView[currentBreakpoint] || slidesPerView.lg;

//   const handleSlideChange = () => {
//     setActiveSlide(swiperRef.current.activeIndex);
//   };
//   const swiperRef = useRef(null);

//   return (
//     <div className="text-white bg-background-testi bg-cover bg-center bg-no-repeat h-screen">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-baseline items-center justify-center">
//           <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow mb-8">
//             What Clients Said
//           </h1>
//           <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
//         </div>
//         <div>
//           {/* <div>
//             <img src={Quote} alt="" />
//           </div> */}
//           <div className="justify-center items-center">
//             <div className="flex px-4 text-center items-center justify-center font-custom-inter pb-[2rem]">
//               <span className="w-1/2">
//                 Designing dreams, one satisfied client at a time. Clients’
//                 feedback is my inspiration, and clients’ satisfaction is my
//                 ultimate achievement in this journey...
//               </span>
//             </div>
//             <div className="px-6 py-2">
//               <Swiper
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 slidesPerView={currentSlidesPerView}
//                 spaceBetween={30}
//                 onSlideChange={handleSlideChange}
//                 breakpoints={{
//                   [breakpoints.sm]: {
//                     slidesPerView: slidesPerView.sm,
//                   },
//                   [breakpoints.md]: {
//                     slidesPerView: slidesPerView.md,
//                   },
//                   [breakpoints.lg]: {
//                     slidesPerView: slidesPerView.lg,
//                   },
//                 }}
//                 className="mySwiper"
//               >
//                 <div className="px-6">
//                   <div>
//                     {clientsData.map((testimonial) => (
//                       <SwiperSlide key={testimonial.id}>
//                         <div className="w-auto px-2 py-2 text-black bg-white justify-center items-center text-center rounded-xl">
//                           <div className="flex justify-center items-center">
//                             <img
//                               src={testimonial.icon}
//                               style={{ width: "100px" }}
//                               alt=""
//                               className="self-center rounded-full"
//                             />
//                           </div>
//                           <p className="py-2 text-lg font-medium">{testimonial.title}</p>
//                           <p className="">{testimonial.description}</p>
//                         </div>
//                       </SwiperSlide>
//                     ))}
//                   </div>
//                 </div>
//               </Swiper>
//               <div className="flex justify-center items-center">
//                 <div className="z-10 flex justify-between  w-full max-w-6xl">
//                   <div className="transform translate-y-1/2 left-2">
//                     {activeSlide > 0 && (
//                       <div
//                         onClick={() => swiperRef.current.slidePrev()}
//                         className="w-[2rem] h-[2rem] cursor-pointer left-[-1rem]"
//                       >
//                         <img src={prevbutton} alt="" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="transform translate-y-1/2 ">
//                     {activeSlide <
//                       clientsData.length - currentSlidesPerView && (
//                       <div
//                         onClick={() => swiperRef.current.slideNext()}
//                         className="w-[2rem] h-[2rem] cursor-pointer right-[-1rem]"
//                       >
//                         <img src={nextbutton} alt="" className="text-end" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
