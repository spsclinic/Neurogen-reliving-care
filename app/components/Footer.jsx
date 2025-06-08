import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md"; // Email icon
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[58vh] bg-teal-950 mt-18">
      <div className="flex gap-40 p-12 ">
        <div className="w-[18%] ml-16">
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

          <p className="text-white mr-2  ibrand-font mt-2">Follow Us</p>
          <div className="flex space-x-3 mt-2">
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
          <h2 className="text-white font-bold">Categories</h2>
          <p className="text-white text-center  ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white   text-center  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-white font-bold">Resources</h2>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
        <div className="mt-6 w-[7%]">
          <h2 className="text-white font-bold">Support</h2>
          <p className="text-white  text-center  ibrand-font text-[13px] mt-8">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center  ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
          <p className="text-white  text-center   ibrand-font text-[13px] mt-2">
            Lorem Ipsum
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-white font-bold">Contact Us</h2>
          <p className="text-white  text-left  ibrand-font text-[13px] mt-8 w-[65%]">
            Medical care 123 health street, city, state, zip code
          </p>
          <div className="flex gap-3 mt-3">
            <div className="bg-white w-[26px] h-[26px] rounded-[50%] mt-2">
              <GoLocation className="text-[14px] text-teal-500 m-1.5"></GoLocation>
            </div>
            <p className="text-white  text-left ibrand-font text-[13px] mt-2 w-[65%]">
              park street 123 main street, city, state zip code
            </p>
          </div>

          <div className="flex gap-3 mt-3">
            <div className="bg-white w-[26px] h-[26px] rounded-[50%] mt-2">
              <MdEmail className="text-[14px] text-teal-500 m-1.5"></MdEmail>
            </div>
            <p className="text-white  text-left ibrand-font text-[13px] mt-2 w-[60%]">
              info@gmail.com
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-white w-[26px] h-[26px] rounded-[50%] mt-2">
              <BsTelephone className="text-[14px] text-teal-500 m-1.5"></BsTelephone>
            </div>
            <p className="text-white  text-left ibrand-font text-[13px] mt-2 w-[60%]">
              phone:+91 8336063313
            </p>
          </div>
        </div>
      </div>
      <div className="w-full -mt-6">
        <div className="w-[88%] h-[0.6px] bg-white mx-auto"></div>
        <p className="text-center text-white text-[12px] mt-2">
          copyright by Neuroliving care
        </p>
      </div>
    </div>
  );
};

export default Footer;
