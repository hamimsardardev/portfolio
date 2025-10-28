import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import {
  MdAddCall,
  MdOutlineLocationOn,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#1B1448]">
          <div className="container">
            <div className="flex justify-between items-center py-[36px]">
              <div>
                <Image src="/Logo.png" alt="Logo" height={56} width={181} />
                <p className="font-roboto text-[18px] font-normal leading-[24px] mt-4 text-primarytwo w-[420px]">
                  I've been working as web developer for the past two years, and
                  have experience in multiple framework
                </p>
              </div>
              <div className="py-3 px-3 inline-block rounded-[8px] ">
                <div>
                  <h4 className="font-roboto text-[24px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary">
                    GET IN TOUCH WITH US
                  </h4>
                  <ul className="flex flex-col gap-2 mt-4">
                    <li className="flex items-center gap-3 font-roboto text-[16px] font-medium leading-[24px] hover:text-[#2cb86f] transition duration-300">
                      <div className="flex items-center justify-center bg-[#101635] h-[40px] w-[40px] rounded-full hover:bg-[#141E26] cursor-pointer">
                        <MdAddCall className="h-[20px] w-[20px] text-primary" />
                      </div>
                      <a
                        href="tel:+8801703949775"
                        className="text-primary hover:text-[#2cb86f]"
                      >
                        +880 1703-949775
                      </a>
                    </li>
                    <li className="flex items-center gap-3 font-roboto text-[16px] font-medium leading-[24px] hover:text-[#2cb86f] transition duration-300">
                      <div className="flex items-center justify-center bg-[#101635] h-[40px] w-[40px] rounded-full hover:bg-[#141E26] cursor-pointer">
                        <MdOutlineMarkEmailUnread className="h-[20px] w-[20px] text-white" />
                      </div>
                      <a href="#" className="text-primary hover:text-[#2cb86f]">
                        hamimsardar118677@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3 font-roboto text-[16px] font-medium leading-[24px] hover:text-[#2cb86f] transition duration-300">
                      <div className="flex items-center justify-center bg-[#101635] h-[40px] w-[40px] rounded-full hover:bg-[#141E26] cursor-pointer">
                        <MdOutlineLocationOn className="h-[20px] w-[20px] text-white" />
                      </div>
                      <a href="#" className="text-primary hover:text-[#2cb86f]">
                        15A/8, Aktek Villa, Tekkapara, Mohammadpur
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <div className="mb-4">
                    <h4 className="font-roboto text-[24px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary">
                      OUR SOCIAL MEDIA
                    </h4>
                  </div>
                  <ul className="flex gap-2 mb-4">
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaFacebookF className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#007B3D] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaDribbble className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#F70164] hover:text-primary hover:rounded-full">
                      <a href="">
                        <IoLogoInstagram className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#0A66C2] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaLinkedin className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#2453FE] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaBehance className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                  </ul>
                  <div>
                    <h6 className="font-roboto text-[24px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary">
                      NEWS LETTER
                    </h6>
                    <form className="mt-4 relative border-2 border-primarytwo rounded-xl focus:outline-none focus:border-primary">
                      <input
                        type="email"
                        placeholder="Enter your gmail"
                        className="w-full font-roboto text-[16px] text-regular px-4 py-2 "
                      />
                      <button
                        type="submit"
                        className="absolute font-roboto text-[16px] text-regular text-third bg-[#2cb86f] hover:text-primary hover:bg-third transition duration-300 px-4 py-2 rounded-r-xl left-[207px] top-0 h-full"
                      >
                        SEND
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-primarytwo bg-[#101535]">
            <div className="container">
              <p className="font-roboto text-primarytwo text-center text-[18px] font-normal py-[30px] leading-[24px]">
                Copyright © 2025 Personal Portfolio
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
