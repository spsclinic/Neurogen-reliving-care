import React from "react";

const Facility = () => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/img/neuro.png')` }}
      ></div>

      {/* Transparent Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 190, 185, 0.7)" }} // 40% opacity
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h1 className="pt-11 text-[35px] font-medium ibrand-font">
          Easily Book Your Doctor
        </h1>
        <p className="pb-8">
          Insights to elevate your financial confidence and unlock your
          potential.
        </p>

        <div className="flex items-center gap-12 justify-center">
          {[
            "Inspection",
            "Emergency",
            "Medical Center",
            "Doctor Specialist",
          ].map((title, index) => (
            <div
              key={index}
              className="w-[17%] h-[35vh] bg-white text-black rounded-2xl"
            >
              <h2 className="m-10">{title}</h2>
              <p className="m-10 text-[12px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                Lorem ipsum dolor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
