import { profile } from "console";
import { img } from "framer-motion/client";
import React from "react";

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

        <div className="relative z-20 flex justify-center gap-6 flex-wrap px-4">
          {Cards.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-md h-[35vh] bg-white rounded-xl shadow-lg p-6"
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
    </div>
  );
};

export default Testimonial;
