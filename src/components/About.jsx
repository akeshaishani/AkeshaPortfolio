import React, { useState, useEffect } from "react";
import myimage from "../assets/my image.png";
import Skills from "../json/skills.json";

export default function About() {
  const [skills, setSkills] = useState([]);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    setSkills(Skills);
  }, []);

  return (
    <div className="text-white bg-background-blend bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto justify-center items-center md:py-[2rem]">
        <div className="flex justify-center items-center">
          <div className="w-1/4 sm:hidden md:hidden lg:flex">
            <img src={myimage} alt="" />
          </div>
          <div className="lg:w-2/4 px-4 ">
            <div className="flex items-baseline sm:justify-center lg:justify-start">
              <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow lg:mb-8">
                About Me
              </h1>
              <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
            </div>
            <div className="py-8 leading-more-loose text-justify font-custom-inter text-base">
              <span>
                Hello! I'm Akesha, a passionate graphic designer with over 5
                years of experience in the creative industry. My journey in
                design began with a deep love for aesthetics and a commitment to
                transforming ideas into visually captivating realities. Over the
                years, I've had the privilege of working on a diverse range of
                projects, from branding and web design to print materials and
                digital illustrations.
                <br />
                <br />
                Also I have experience in Adobe Illustrator, Photoshop, and In
                Design. I specialize in creating captivating designs that tell
                compelling stories. Let's work together to bring your vision to
                life in the most beautiful and impactful way possible.
              </span>
            </div>
          </div>
        </div>
        <div className="py-6 lg:pt-12 flex items-center justify-center space-x-[1rem] md:space-x-[2rem] lg:space-x-[2rem]">
          <hr className="w-12 md:w-28 lg:w-64 bg-white h-0.5 md:h-1" />
          <h1 className="text-xl md:text-3xl font-custom-alata">
            Skills I Have Gained
          </h1>
          <hr className="w-12 md:w-28 lg:w-64 bg-white h-0.5 md:h-1" />
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-14 flex-wrap gap-4 md:justify-between py-[2rem] mx-auto">
          {skills.map((skills) => (
            <div key={skills.id} className="flex justify-center items-center">
              <img
                className="w-[4rem] h-auto filter md:brightness-50 hover:filter-none transition duration-300"
                src={skills.imghov}
                alt={`${skills.name} ${skills.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
