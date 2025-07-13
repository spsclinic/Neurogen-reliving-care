import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full bg-teal-950 pt-12 pb-6 px-4 md:px-8 lg:px-12">
      {/* Main Footer Grid */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-[1240px] mx-auto">
        {/* Logo & Address */}
        <div className="lg:w-[20%] w-full">
          <img
            src="./img/logo.png"
            alt="Neuroliving Logo"
            className="w-[150px] mb-4"
          />
          <p className="text-white text-sm leading-relaxed ibrand-font">
            Address: Abhinandan, Koyla Vihar, G/06/A, VIP Rd, near Mahindra
            Shree Automotive Showroom, Arjunpur, Rajarhat, Kolkata, West Bengal
            700052
          </p>

          <p className="text-white mt-4 ibrand-font font-semibold">Follow Us</p>
          <div className="flex space-x-3 mt-3">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full p-2 hover:scale-110 transition"
              >
                <Icon className="text-teal-500 text-[18px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links Columns */}
        {[
          { title: "Categories" },
          { title: "Resources" },
          { title: "Support" },
        ].map((section, index) => (
          <div key={index} className="w-full md:w-[25%] lg:w-[12%]">
            <h2 className="text-white font-bold">{section.title}</h2>
            {[...Array(3)].map((_, i) => (
              <p
                key={i}
                className="text-white text-sm ibrand-font mt-4 hover:underline cursor-pointer"
              >
                Lorem Ipsum
              </p>
            ))}
          </div>
        ))}

        {/* Contact Section */}
        <div className="w-full lg:w-[25%]">
          <h2 className="text-white font-bold">Contact Us</h2>
          <p className="text-white text-sm mt-4 ibrand-font leading-relaxed">
            Medical care 123 health street, city, state, zip code
          </p>

          {/* Location */}
          <div className="flex items-start mt-4 gap-3">
            <div className="bg-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <GoLocation className="text-teal-500 text-[14px]" />
            </div>
            <p className="text-white text-sm ibrand-font leading-snug">
              Park Street 123, main street, city, state, zip code
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start mt-3 gap-3">
            <div className="bg-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <MdEmail className="text-teal-500 text-[14px]" />
            </div>
            <p className="text-white text-sm ibrand-font">info@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-start mt-3 gap-3">
            <div className="bg-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <BsTelephone className="text-teal-500 text-[14px]" />
            </div>
            <p className="text-white text-sm ibrand-font">+91 8336063313</p>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-10 w-full">
        <div className="max-w-[1240px] mx-auto px-4 text-center">
          <div className="h-[1px] w-full bg-white opacity-30 mb-2"></div>
          <p className="text-white text-[12px] ibrand-font">
            © 2025 Neuroliving Care. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
