import { profile } from "console";
import { img } from "framer-motion/client";
import React from "react";

const Cards = [
  {
    id: 10,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Jessica D",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },

  {
    id: 11,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Jessica D",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },

  {
    id: 12,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Jessica D",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
  {
    id: 13,
    profile:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc3LW1ja2luc2V5LTE0MjMtcG9tXzQuanBn.jpg",
    name: "Jessica D",
    treatment: "neuro disease",
    headline: "this is the headline",
    testimony: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full  h-[60vh] bg-[#3EC8BD]">
      <h1 className="text-center pt-11 text-[35px] text-white  font-medium  ibrand-font">
        Patient Testimonial
      </h1>
      <p className="text-white text-[12px] text-center">
        Lorem ipsum dolor sit amet consectetur sit amet consectetur
      </p>
      
      <div className="flex">
        {Cards.map((item) => (
          <div
            key={item.id}
            className="w-[350px] flex h-[250px] ml-3 bg-white rounded-[12px]"
          >
            <div className="flex gap-10">
              <img
                src={item.profile}
                alt=""
                className="w-[35px] h-[35px] rounded-[50%] m-5"
              />
              <p className="text-[12px]">{item.name}</p>
            </div>
            <div className="w-[100%] mt-22 ">
              <h4>{item.headline}</h4>
              <p className="text-[13px]">{item.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
