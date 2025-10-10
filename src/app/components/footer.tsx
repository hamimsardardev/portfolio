import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer className="mt-[80px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <Image src="/Logo.png" alt="Logo" height={56} width={181} />
              <p className="font-geist text-[18px] font-normal leading-[24px] mt-4 text-secondery w-[420px]">
                I've been working as web developer for the past two years, and have experience in multiple framework
              </p>
            </div>
            <div>
              <ul className=" py-[10px] font-geist text-secondery text-[20px]">
                <li className=" hover:text-[#A53DFF]">
                  <a href="#">Home</a>
                </li>
                <li className=" hover:text-[#A53DFF]">
                  <a href="#">About</a>
                </li>
                <li className=" hover:text-[#A53DFF]">
                  <a href="#">Portfolio</a>
                </li>
                <li className=" hover:text-[#A53DFF]">
                  <a href="#">Blog</a>
                </li>
                <li className=" hover:text-[#A53DFF]">
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>            
            <div className="py-3 px-3 inline-block rounded-[8px] ">
                  <ul className="flex gap-2 ">
                    <li className="py-[15px] px-[15px] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white">
                      <a href="">
                        <FaFacebookF className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white">
                      <a href="">
                        <FaDribbble className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white">
                      <a href="">
                        <IoLogoInstagram className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white">
                      <a href="">
                        <FaLinkedin className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white">
                      <a href="">
                        <FaBehance className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                  </ul>
                </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
