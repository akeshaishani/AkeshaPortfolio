import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="text-white">
      <nav className="px-6 py-4 lg:flex justify-between items-center bg-blue">
        <h1 className="font-custom-alata text-2xl lg:text-4xl">Akesha</h1>
        <div className="flex items-center space-x-4">
          <div className="items-center space-x-4 sm:hidden md:hidden lg:flex">
            <p>About Me</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Testimonial</p>
          </div>
          <button className="bg-button-gradient px-4 py-2 rounded-md">
            Hire Me
          </button>
          <div className="text-2xl cursor-pointer sm:block md:block lg:hidden">
            
            {open ? (
              <AiOutlineMenu onClick={handleMenuClick} />
            ) : (
              <AiOutlineClose onClick={handleMenuClick} />
            )}

            
          </div>
        </div>
      </nav>
      {open ? (
        ""
      ) : (
        <div className="absolute right-[25rem] top-[6rem] bg-blue h-[300px] w-[150px]"><p>About Me</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Testimonial</p></div>
      )}
    </div>
  );
}
