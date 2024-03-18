import React from "react";
import Header1 from "./Header1";
import scroll from "../assets/scroll-down.svg";

export default function Hero() {
  return (
    <div className="text-white bg-background-abs bg-cover bg-center h-screen">
      <Header1 />
      <div className="max-w-6xl mx-auto px-2 h-full flex justify-center items-center">
        <div className="text-center items-center">
          <div className="font-custom-alata space-y-2 lg:space-y-4 py-4 lg:py-6">
            <p className="text-2xl lg:text-6xl">
              Crafting Your Dreams Into <br />
              <span className="text-mainyellow text-4xl lg:text-7xl">
                A Reality
              </span>
              <br />
              Through Design Excellence
            </p>
          </div>
          <div className="font-custom-inter text-center text-sm lg:text-base lg:leading-loose px-4 lg:px-12 py-8">
            <span className="">
              Celebrating the artistry of every pixel, the grace of every line,
              and the vibrance of every color, we meticulously craft your dreams
              into a breathtaking visual reality. Let's embark on a creative
              journey together, where imagination knows no bounds.
            </span>
          </div>
          <div className="flex flex-col items-center pt-[2rem]">
            <div>
              <img src={scroll} alt="" className="animate-bounce w-6 h-6" />
            </div>
            <div>
              <p>Scroll Down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
