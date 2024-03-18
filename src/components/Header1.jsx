import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header1() {
  const [open, setOpen] = useState(true);
  const menuRef = useRef();

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-20 text-white fixed top-0 w-full shadow-md bg-blue">
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-custom-alata text-4xl hover:cursor-pointer">Akesha</h1>
        <div className="flex items-center space-x-6">
          <div className="items-center space-x-6 sm:hidden md:hidden lg:flex">
            <p className="hover:text-mainyellow hover:cursor-pointer">About Me</p>
            <p className="hover:text-mainyellow hover:cursor-pointer">Services</p>
            <p className="hover:text-mainyellow hover:cursor-pointer">Projects</p>
            <p className="hover:text-mainyellow hover:cursor-pointer">Testimonial</p>
            <p className="hover:text-mainyellow hover:cursor-pointer">Contact Me</p>
          </div>

          {/* <button className="bg-button-gradient px-4 py-2 rounded-md sm:hidden lg:flex">
            Hire Me
          </button> */}
          <div className="lg:hidden text-2xl" ref={menuRef}>
            {open ? (
              <AiOutlineMenu onClick={handleMenuClick} />
            ) : (
              <AiOutlineClose onClick={handleMenuClick} />
            )}
          </div>
        </div>
      </nav>
      {!open && (
        <div
          className="absolute right-[0rem] top-[4rem] bg-blue h-auto w-[150px] space-y-8 py-6 shadow-md lg:hidden"
          ref={menuRef}
        >
          <p className="pl-4 py-2">About Me</p>
          <p className="pl-4 py-2">Services</p>
          <p className="pl-4 py-2">Projects</p>
          <p className="pl-4 py-2">Testimonial</p>
        </div>
      )}
    </div>
  );
}
