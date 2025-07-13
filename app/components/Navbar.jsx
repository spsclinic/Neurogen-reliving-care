"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// Navigation Items
const Menue = [
  { id: "101", name: "Home" },
  { id: "102", name: "Aboutus" },
  { id: "103", name: "Gallery" },
  { id: "104", name: "Contact" },
];

// Animation Variants
const logoVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2, // slower
      ease: "easeOut",
    },
  },
};

const navItemVariant = {
  hidden: { y: -20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6 + i * 0.3, // slower stagger
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 overflow-x-hidden">
      <div className="w-full px-4 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo with animation */}
        <motion.div
          className="shrink-0 mr-auto xl:ml-[-16px]"
          variants={logoVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-[100px] sm:w-[120px] md:w-[140px] h-auto"
          />
        </motion.div>

        {/* Desktop Menu Items with animation */}
        <ul className="hidden xl:flex items-center space-x-12 font-medium">
          {Menue.map((item, i) => (
            <motion.li
              key={item.id}
              custom={i}
              variants={navItemVariant}
              initial="hidden"
              animate="visible"
              className="cursor-pointer hover:text-[#3EC8BD] transition duration-200"
            >
              {item.name}
            </motion.li>
          ))}
          {/* Button also animated */}
          <motion.div
            variants={navItemVariant}
            custom={Menue.length}
            initial="hidden"
            animate="visible"
            className="block z-50"
          >
            <button className="bg-[#3EC8BD] px-4 py-2 rounded-[10px] text-white hover:bg-[#30b0a6] transition duration-300">
              Download
            </button>
          </motion.div>
        </ul>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden block z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 font-medium">
          {Menue.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-[#3EC8BD] transition duration-200"
            >
              {item.name}
            </li>
          ))}
          <button className="bg-[#3EC8BD] px-4 py-2 rounded-[10px] text-white hover:bg-[#30b0a6] transition duration-300 w-fit">
            Download
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
