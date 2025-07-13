"use client";
import React from "react";
import { motion } from "framer-motion";

const cardData = [
  { id: 1, title: "Inspection", icon: "/img/icon4.png" },
  { id: 2, title: "Emergency", icon: "/img/icon3.png" },
  { id: 3, title: "Medical Center", icon: "/img/icon1.png" },
  { id: 4, title: "Doctor Specialist", icon: "/img/icon2.png" },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.4,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.2, 0.85, 0.4, 1],
    },
  },
};

const Facility = () => {
  return (
    <div className="relative w-full min-h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/img/neuro.png')` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-600 opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-[1200px] mx-auto py-12">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.2, 0.85, 0.4, 1] }}
          className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold ibrand-font leading-snug"
        >
          Easily Book Your Doctor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.2, 0.85, 0.4, 1] }}
          className="text-sm sm:text-base pb-10 max-w-xl mx-auto opacity-90"
        >
          Insights to elevate your health experience and unlock convenient
          access to care.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cardData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{
                rotateY: 6,
                scale: 1.03,
                transition: { type: "spring", stiffness: 160, damping: 15 },
              }}
              className="card-3d"
            >
              <motion.div className="card-inner bg-white text-black hover:bg-[#3EC8BD] hover:text-white transition-all duration-300 rounded-2xl p-6 flex flex-col items-center shadow-md">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[55px] h-[55px] mb-4 bg-[#3EC8BD] rounded-full p-2"
                />
                <h2 className="font-bold text-lg text-center">{item.title}</h2>
                <p className="text-[13px] text-center mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  facilis alias sunt.
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Facility;
