import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="container">
          <div className="flex justify-between items-center py-[36px]">
            <div>
              <Image src="/Logo.png" alt="Logo" height={56} width={181} />
              <p className="font-dmSans text-[18px] font-normal leading-[24px] mt-4 text-primarytwo w-[420px]">
                I've been working as web developer for the past two years, and
                have experience in multiple framework
              </p>
            </div>
            <div className="py-3 px-3 inline-block rounded-[8px] ">
              <ul className="flex gap-2 ">
                <li className="py-[15px] px-[15px] text-primarytwo hover:bg-primarytwo hover:text-primary rounded-full ">
                  <a href="">
                    <FaFacebookF className="h-[20px] w-[20px]" />
                  </a>
                </li>
                <li className="py-[15px] px-[15px] text-primarytwo hover:bg-primarytwo hover:text-primary rounded-full ">
                  <a href="">
                    <FaDribbble className="h-[20px] w-[20px]" />
                  </a>
                </li>
                <li className="py-[15px] px-[15px] text-primarytwo hover:bg-primarytwo hover:text-primary rounded-full ">
                  <a href="">
                    <IoLogoInstagram className="h-[20px] w-[20px]" />
                  </a>
                </li>
                <li className="py-[15px] px-[15px] text-primarytwo hover:bg-primarytwo hover:text-primary rounded-full ">
                  <a href="">
                    <FaLinkedin className="h-[20px] w-[20px]" />
                  </a>
                </li>
                <li className="py-[15px] px-[15px] text-primarytwo hover:bg-primarytwo hover:text-primary rounded-full ">
                  <a href="">
                    <FaBehance className="h-[20px] w-[20px]" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a
                className="font-dmSans text-[24px] font-semibold text-primarytwo leading-[24px] border-b border-primarytwo pb-1"
                href="#"
              >
                hamimsardar118677@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-primarytwo">
            <div className="container">
              <p className="font-dmSans text-primarytwo text-center text-[18px] font-normal py-[30px] leading-[24px]">
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
