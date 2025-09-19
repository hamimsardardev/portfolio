import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const ProfessionalPart = () => {
  return (
    <>
      <section className="pb-[112px]">
        <div className="container">
          <div className="grid grid-cols-2 justify-senter items-center">
            <div className="relative">
              <Image
                src="/professionimage.png"
                alt="profession"
                height={424}
                width={464}
              />
              <div className="py-3 px-3 bg-white inline-block rounded-[8px] absolute left-[80px] bottom-[-35px]">
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
            <div>
              <div>
                <h2 className="font-geist text-[38px] font-semibold leading-[50px] text-primary mb-8 w-[536px]">
                  I am Professional User Experience Designer
                </h2>
                <p className="font-geist text-[18px] font-regular leading-[24px] text-secondery">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences.
                  <span className="block font-geist text-[18px] font-regular leading-[24px] text-secondary mt-4 mb-8">
                    I design and develop services for customers specializing
                    creating stylish, modern websites, web services.
                  </span>
                </p>
                <div className="flex gap-4">
                  <div className="button">My Project</div>
                  <div className="button">Download CV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalPart;
