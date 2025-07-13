"use client";
import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // Slower stagger between items
      delayChildren: 0.4, // Small initial delay
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier for easing
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section className="w-full px-4 pt-24 pb-12 lg:pt-32 lg:pb-20 bg-white box-border overflow-x-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Image Section */}
        <motion.div
          variants={slideRight}
          className="order-1 lg:order-2 md:col-span-1 lg:col-span-6 relative"
        >
          <img
            src="/img/heroimg.png"
            alt="Doctor with patient"
            className="w-full h-auto max-h-[500px] object-contain rounded-[40px]"
          />
          {/* Floating Card */}
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-[#3EC8BD] p-2 rounded-full">
                <svg
                  className="text-white w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553 2.276A1 1 0 0120 13.118V18a1 1 0 01-1 1h-6a2 2 0 01-2-2v-1m2-3a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold">Connect Doctor</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={slideLeft}
          className="order-2 lg:order-1 md:col-span-1 lg:col-span-6 text-center lg:text-left space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[64px] leading-tight font-bold ibrand-font"
          >
            Exceptional Care, <span className="text-[#3EC8BD]">Every Time</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-semibold"
          >
            Lorem ipsum dolor sit amet consectetur vitae et varius sagittis
            dignissim malesuada nisl leo sed.
          </motion.p>

          {/* Buttons - Responsive & Side-by-Side */}
          <motion.div
            variants={fadeUp}
            className="flex flex-row gap-3 justify-center lg:justify-start mt-4 flex-wrap"
          >
            <button className="bg-[#3EC8BD] text-white py-2 px-4 sm:px-5 md:px-6 rounded-lg text-[13px] sm:text-[14px] md:text-[15px] font-semibold whitespace-nowrap">
              Learn More
            </button>
            <button className="border border-[#3EC8BD] text-[#3EC8BD] flex items-center justify-center gap-2 py-2 px-4 sm:px-5 md:px-6 rounded-lg text-[13px] sm:text-[14px] md:text-[15px] font-semibold whitespace-nowrap">
              <Search size={16} />
              Find Doctor
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
