"use client";
import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";

const AboutPart = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 md:gap-6 items-center border-t border-b border-seconerycolor py-[80px] md:py-[100px] lg:py-[112px] px-5">
            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[464px]"
              >
                <Image
                  src="/professionimage.png"
                  alt="profession"
                  height={424}
                  width={464}
                />
                <div className="py-3 px-3 bg-primarytwo/50 inline-block rounded-[8px] absolute left-[35px] bottom-[-25px] md:left-[30px] lg:left-[130px] lg:bottom-[-35px]">
                  <ul className="flex gap-1 lg:gap-2 ">
                    <li className="py-[10px] px-[10px] md:py-[12px] md:px-[12px] lg:py-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaFacebookF className="w-3 h-3 md:h-4 md:w-4 lg:h-[20px] lg:w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[10px] px-[10px] md:py-[12px] md:px-[12px] lg:py-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaDribbble className="w-3 h-3 md:h-4 md:w-4 lg:h-[20px] lg:w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[10px] px-[10px] md:py-[12px] md:px-[12px] lg:py-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <IoLogoInstagram className="w-3 h-3 md:h-4 md:w-4 lg:h-[20px] lg:w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[10px] px-[10px] md:py-[12px] md:px-[12px] lg:py-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaLinkedin className="w-3 h-3 md:h-4 md:w-4 lg:h-[20px] lg:w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[10px] px-[10px] md:py-[12px] md:px-[12px] lg:py-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaBehance className="w-3 h-3 md:h-4 md:w-4 lg:h-[20px] lg:w-[20px]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div>
                  <h3 className="font-roboto text-[24px] font-semibold leading-[22px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                    About
                  </h3>
                  <h2 className="font-dmSans text-[20px] leading-[20px] lg:text-[30px] font-normal lg:leading-[35px] mt-3 text-primary mb-4">
                    Who am i
                  </h2>
                  <p className="font-roboto text-[14px] leading-[20px] lg:text-[16px] font-normal lg:leading-[24px] text-primarytwo">
                    I am a skilled MERN Stack Developer specializing in building
                    efficient, scalable, and user-friendly web applications
                    using MongoDB, Express.js, React.js, and Node.js. I focus on
                    clean code, responsive design, and delivering high-quality
                    digital solutions.
                  </p>
                  <h2 className="font-dmSans text-[20px] leading-[20px] lg:text-[30px] font-normal lg:leading-[35px] mt-3 text-primary mb-4">
                    I Can Develop Anything You Want.
                  </h2>
                  <p className="font-roboto text-[14px] leading-[20px] lg:text-[16px] font-normal lg:leading-[24px] text-primarytwo">
                    A Part of a team that developed enterprise-level web
                    applications using the MERN stack, focusing on scalable
                    architecture and seamless user experience.
                  </p>
                  <h2 className="font-dmSans text-[20px] leading-[20px] lg:text-[30px] font-normal lg:leading-[35px] mt-3 text-primary mb-4">
                    I can follow digital Trends
                  </h2>
                  <p className="font-roboto text-[14px] leading-[20px] lg:text-[16px] font-normal lg:leading-[24px] text-primarytwo">
                    I have experience working with a wide range of technologies,
                    with a strong focus on the MERN stack (MongoDB, Express.js,
                    React.js, Node.js). I value working with teams that are
                    passionate about building impactful, high-quality web
                    applications.
                  </p>
                  <div className="mt-8">
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="button">My Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPart;
