import React, { useState } from "react";
import { FaAt, FaDribbble, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const [contactdata, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({
      ...contactdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited:", contactdata);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl mx-auto py-[4rem] items-center justify-center">
        <div className="flex items-baseline items-center justify-center">
          <h1 className="font-custom-alata text-3xl lg:text-5xl text-mainyellow mb-8">
            Contact Me
          </h1>
          <hr className="rounded-full h-1 lg:h-2 ml-4 w-10 lg:w-20 bg-mainyellow border-none" />
        </div>

        <div className="mx-auto lg:flex lg:justify-between py-[2rem] sm:space-y-10 lg:space-y-0 lg:space-x-32">
          <div className="flex flex-col justify-between sm:w-[19rem] md:w-[30rem] bg-contactblue/20 text-white p-4 space-y-6 rounded-md p-10">
            <h1 className="text-5xl">Hello,</h1>
            <span className="text-lg">Let me know how can I help you</span>
            <div className="flex space-x-6 ">
              <FaAt className="text-mainblue bg-white text-3xl rounded-sm p-1" />
              <span className="text-sm lg:text-xl">akeshaishani@gmail.com</span>
            </div>
            <div className="flex space-x-6">
              <FaDribbble className="text-mainblue bg-white text-3xl rounded-sm p-1" />
              <span className="text-sm lg:text-xl">
                www.dribbble.com/akeshaishani
              </span>
            </div>
            <div className="flex space-x-6">
              <FaLinkedinIn className="text-mainblue bg-white text-3xl rounded-sm p-1" />
              <span className="text-sm lg:text-xl">
                www.linkedin.com/in/akesha-ishani
              </span>
            </div>
            <div className="align-bottom">
              <span className="text-sm lg:text-lg">
                Let's collaborate and bring your ideas to life!
              </span>
            </div>
          </div>

          <div className="sm:w-[19rem] md:w-[30rem]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-white">Your Name *</label>
                <input
                  className="w-full border-2 border-contactblue bg-inherit pl-2 py-2 rounded text-white"
                  type="text"
                  id="name"
                  name="name"
                  value={contactdata.name}
                  onChange={handleChange}
                  placeholder="Type Your Name Here"
                ></input>
              </div>
              <div>
                <label className="text-white">Your Email *</label>
                <input
                  className="w-full border-2 border-contactblue bg-inherit pl-2 py-2 rounded text-white"
                  type="email"
                  id="email"
                  name="email"
                  value={contactdata.email}
                  onChange={handleChange}
                  placeholder="Type Your Email Here"
                ></input>
              </div>
              <div>
                <label className="text-white">Your Message *</label>
                <textarea
                  className="w-full border-2 border-contactblue bg-inherit h-full pl-2 py-2 rounded text-white"
                  id="message"
                  name="message"
                  value={contactdata.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="w-full flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-button-gradient px-4 py-2 rounded-md text-white w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
