"use client";
import React, { useState } from "react";
const Facilities = [
  { id: 100, service: "Medical Check up" },

  { id: 101, service: "Dental Specialist Clinic" },

  { id: 102, service: "Labpratory" },

  { id: 103, service: "Pharmacy" },

  { id: 104, service: "Radiology" },
];

const Serviceslist = () => {
  const [hoverId, setHoverId] = useState(false);

  return (
    <div className="w-full h-[70vh]">
      <h1 className="text-center pt-11 text-[35px] text-black font-medium  ibrand-font">
        <span className="text-[#3EC8BD]">Fcalities</span> and Services
      </h1>

      <div className="grid grid-cols-12 w-[60%]  mx-auto mt-8">
        <div className="col-span-3  ">
          <ul>
            {Facilities.map((items) => (
              <li
                key={items.id}
                onMouseEnter={() => setHoverId(items.id)}
                onMouseLeave={() => setHoverId(null)}
                className={`p-3  rounded-[10px] ${
                  hoverId === items.id
                    ? "bg-gradient-to-r from-[#00c6a9] to-[#00c6a9]/12 hover:to-all transition-all border-r-3 border-[#00c6a9]  duration-300"
                    : "bg-white"
                } `}
              >
                {items.service}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-9 shadow-2xs pl-10">
          <div className="flex w-full h-[33vh] p-3 rounded-[10px] mt-2 shadow-[0_2px_4px_6px_rgba(62,200,189,0.5)]">
            <div className="h-full">
              <img
                src="img/doctor1.jpg"
                alt=""
                className="h-full w-[220px] object-cover rounded-[8px]"
              />
            </div>
            <div className="w-[60%] mt-6 ml-4">
              <h2 className="ibrand-font">Medical Checkup</h2>
              <p className="text-[12px] mt-2 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores dolor sed ratione numquam tenetur exercitationem
                perferendis autem eos? Ipsa mollitia modi perspiciatis hic
                assumenda at quia eaque repudiandae eligendi qui.
              </p>
              <button className="text-[10px] w-[30%] bg-[#3EC8BD] text-white p-2 rounded-[8px] mt-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceslist;
