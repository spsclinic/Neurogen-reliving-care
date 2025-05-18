import React from "react";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-12 w-[100%]">
        <div className="col-span-6 m-25">
          <h1 className="text-[70px]  leading-[1] ibrand-font">
            Exceptional Care <span className="text-[#3EC8BD]">Every Time</span>
          </h1>
          <p className="text-[16px] mt-3 font-semibold text-gray-700 w-[100%]">
            Be it your general wellbeing, medical emergency or hassles of your
            daily life, leave all your problems to us as you enjoy life freely
            24 X 7
          </p>
          <div className="flex gap-6">
            <button className="bg-[#3EC8BD] p-2.5 rounded-[11px] text-white mt-5 w-[25%]">
              Learn More
            </button>
            <button className=" border-2 border-[#3EC8BD] p-2.5 rounded-[11px]  mt-5 w-[25%]">
              Find Doctor
            </button>
          </div>
        </div>
        <div className="col-span-6 m-10">
          <img src="img/heroimg.png" alt="" className="w-[100%] h-[65vh]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
