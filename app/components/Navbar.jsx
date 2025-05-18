"use client";
import React from "react";

const Menue = [
  { id: "101", name: "Home" },
  { id: "102", name: "Aboutus" },
  { id: "103", name: "Gallery" },
  { id: "104", name: "Contact" },
];

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-12 w[100%] height-[5vh] ">
        {/*logo*/}
        <div className="col-span-7 ml-23">
          <img
            src="./img/logo.png"
            alt=""
            className="w-[180px] height-[10px] m-2.5"
          />
        </div>
        {/*nav*/}
        <div className="col-span-5">
          <ul className="flex justify-between mt-6 mr-32 space-x-6 items-center font-medium">
            {Menue.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
            <button className="bg-[#3EC8BD]  p-2 rounded-[10px] text-white w-[22%]  ">
              Download
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
