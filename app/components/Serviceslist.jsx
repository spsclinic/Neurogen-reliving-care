"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Facilities = [
  { id: 100, service: "Medical Check Up" },
  { id: 101, service: "Dental Specialist Clinic" },
  { id: 102, service: "Laboratory" },
  { id: 103, service: "Pharmacy" },
  { id: 104, service: "Radiology" },
];

// Framer Motion animation
// Framer Motion animation (slower + linear)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
};

const Serviceslist = () => {
  const [hoverId, setHoverId] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="w-full px-4 py-12 bg-[#f9f9f9]"
    >
      <h1 className="text-center text-[28px] sm:text-[32px] font-semibold ibrand-font text-black mb-8">
        <span className="text-[#3EC8BD]">Facilities</span> and Services
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1200px] mx-auto">
        {/* Facility List */}
        <div className="lg:col-span-3 space-y-3">
          {Facilities.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoverId(item.id)}
              onClick={() => setHoverId(item.id)}
              className={`cursor-pointer text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 text-center lg:text-left
                ${
                  hoverId === item.id
                    ? `bg-gradient-to-r from-[#00c6a9] to-[#00c6a9]/5 border-[#3EC8BD] text-white ${
                        isMobile ? "w-[75%] mx-auto" : "w-full"
                      }`
                    : " text-black"
                }
              `}
            >
              {item.service}
            </div>
          ))}
        </div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-9"
        >
          <div className="bg-white shadow-[0_4px_20px_rgba(62,200,189,0.25)] rounded-xl p-5 flex flex-col lg:flex-row items-center lg:items-start gap-6 transition-all duration-300">
            {/* Image */}
            <img
              src="/img/doctor1.jpg"
              alt="doctor"
              className="w-full max-w-[100%] sm:max-w-[400px] lg:max-w-[250px] rounded-xl object-cover shadow-lg"
            />

            {/* Text */}
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-[18px] font-semibold text-black ibrand-font mb-2">
                {Facilities.find((f) => f.id === hoverId)?.service}
              </h2>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                duis enim lacus mauris ullamcorper cursus quis elementum.
                Aliquet sagittis sed adipiscing mauris massa viverra.
              </p>
              <button className="bg-[#00c6a9] hover:bg-[#00b1a0] text-white text-[13px] px-4 py-2 rounded-md transition-all">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Serviceslist;
