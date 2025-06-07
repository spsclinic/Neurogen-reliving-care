import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-[48vh] bg-teal-950 mt-18">
      <div className="flex gap-40 p-12">
        <div className="w-[18%]">
          <img
            src="./img/logo.png"
            alt=""
            className="w-[150px] height-[13px] m-2.5"
          />
          <p className="text-white  ibrand-font text-[15px]">
            Address: Abhinandan, Koyla Vihar, G/06/A, VIP Rd, near Mahindra
            Shree Automotive Showroom, Arjunpur, Rajarhat, Kolkata, West Bengal
            700052
          </p>

          <p className="text-white mr-2 p-2 ibrand-font">Follow Us</p>
          <div className="flex space-x-3">
            <div className="bg-white rounded-full p-2">
              <FaFacebookF className="text-teal-500 text-[20px]" />
            </div>
            <div className="bg-white rounded-full p-2">
              <FaInstagram className="text-teal-500 text-[20px]" />
            </div>
            <div className="bg-white rounded-full p-2">
              <FaXTwitter className="text-teal-500 text-[20px]" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white">Header1</h2>
          <p className="text-white  ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-white">Header1</h2>
          <p className="text-white  ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-white">Header1</h2>
          <p className="text-white  ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-white">Header1</h2>
          <p className="text-white  ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
