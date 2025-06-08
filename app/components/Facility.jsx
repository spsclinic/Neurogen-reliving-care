import React from "react";

const cardData = [
  { id: 1, title: "Inspection", icon: "/img/icon4.png" },
  { id: 2, title: "Emergency", icon: "/img/icon3.png" },
  { id: 3, title: "Medical Center", icon: "/img/icon1.png" },
  { id: 4, title: "Doctor Specialist", icon: "/img/icon2.png" },
];

const Facility = () => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/img/neuro.png')` }}
      ></div>

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-teal-500 opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="pt-11 text-[35px] font-medium ibrand-font">
          Easily Book Your Doctor
        </h1>
        <p className="pb-8">
          Insights to elevate your financial confidence and unlock your
          potential.
        </p>

        <div className="flex flex-wrap justify-center items-start gap-8">
          {cardData.map((item) => (
            <div
              key={item.id}
              className=" text-white hover:text-black   hover:bg-white w-[19%] h-[35vh] rounded-[12px] p-8 flex flex-col items-start   "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[55px] h-[55px] rounded-full bg-teal-400 mb-4"
              />
              <h2 className="font-bold   text-center">{item.title}</h2>
              <p className="text-[13px]  text-left mt-2">
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
