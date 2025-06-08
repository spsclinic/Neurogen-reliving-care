"use client";
import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Cards = [
  {
    id: 10,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Jonas paul",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },

  {
    id: 11,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Jessica Davis",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },

  {
    id: 12,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Luke willamson",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    id: 13,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Luke willamson",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    id: 14,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Luke willamson",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },

  // {
  //   id: 13,
  //   profile:
  //     "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
  //   name: "Jhon Doe ",
  //   treatment: "neuro disease",
  //   headline: "this is the headline",
  //   testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  // },
];

const Testimonial = () => {
  const slideRef = useRef(null);

  const scrollLeft = () => {
    slideRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    slideRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div
      className="w-full  h-[60vh] relative   inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/neuro.png')` }}
    >
      {/* Transparent Overlay */}
      <div
        className="inset-0 absolute  bg-teal-500 opacity-70 z-10"
        style={{ backgroundColor: "rgba(0, 190, 185, 0.9)" }} // 40% opacity
      ></div>

      {/* Content Above Overlay */}
      <div className="relative z-20">
        <h1 className="text-center pt-11 text-[45px] text-white  font-medium  ibrand-font">
          Patient Testimonial
        </h1>
        <p className="text-white text-[12px] text-center mb-6">
          Lorem ipsum dolor sit amet consectetur sit amet consectetur
        </p>

        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-[10%] top-[60%] z-30 w-[32px] h-[32px] rounded-full bg-white shadow-md"
          aria-label="Scroll left"
        >
          <FaArrowLeft className="text-[22px] m-auto" />
        </button>

        {/* Scrollable Testimonial Cards */}

        <div
          ref={slideRef}
          className="relative flex gap-6 px-4 w-[960px] mx-auto hide-scrollbar overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {Cards.map((item) => (
            <div
              key={item.id}
              className="w-[300px] h-[35vh] bg-white   rounded-xl shadow-lg p-6 flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="w-[55px] h-[55px] rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.treatment}</p>
                </div>
              </div>

              <h4 className="text-[16px] font-bold text-gray-800 mb-2">
                {item.headline}
              </h4>
              <p className="text-sm text-gray-600">{item.testimony}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-[10%] top-[60%] z-30 w-[32px] h-[32px] rounded-full bg-white shadow-md"
        aria-label="Scroll right"
      >
        <FaArrowRight className="text-[22px] m-auto" />
      </button>
    </div>
  );
};

export default Testimonial;
