import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[60vh] p-4 ">
      <div
        className="w-[95%] h-[85vh] rounded-[13px] mx-auto bg-cover bg-center relative -mt-60 z-0"
        style={{ backgroundImage: "url('/img/banner.png')" }}
      >
        <div className="grid grid-cols-12 h-[35vh] p-8 z-10 relative">
          <div className="col-span-6 flex flex-col justify-center text-white ml-26 mt-35 ">
            <h2 className="text-[38px] font-medium mb-4 w-[60%] ibrand-font">
              24/7 Online Doctor Consultations
            </h2>
            <button className="ibrand-font bg-white text-black p-2 w-[25%] rounded-[12px]">
              Learn More
            </button>
          </div>
          <div className="col-span-6 mt-24">
            <img src="img/doctor.png" alt="" className="w-[100%] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
