"use client";
import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";

const AboutPart = () => {
  return (
    <>
      <section className="py-[112px]">
        <div className="container">
          <div className="grid grid-cols-2 justify-senter items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/professionimage.png"
                  alt="profession"
                  height={424}
                  width={464}
                />
                <div className="py-3 px-3 bg-primary inline-block rounded-[8px] absolute left-[80px] bottom-[-35px]">
                  <ul className="flex gap-2 ">
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaFacebookF className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaDribbble className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <IoLogoInstagram className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaLinkedin className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaBehance className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div>
              <div>
                <h3 className="font-roboto text-[15px] font-bold leading-[22px] text-third">
                  About
                </h3>
                <h2 className="font-dmSans text-[30px] font-normal leading-[35px] mt-3 text-primary mb-4">
                  Who am i
                </h2>
                <p className="font-roboto text-[16px] font-normal leading-[24px] text-secondery">
                  I've created and updated websites for many different clients.
                  I worked with multiple CMS including WordPress, Joomla, and
                  Drupal, as well as created my own custom website management
                  system in Node.js
                </p>
                <h2 className="font-dmSans text-[30px] font-normal leading-[35px] mt-3 text-primary mb-4">
                  I Can Develop Anything You Want
                </h2>
                <p className="font-roboto text-[16px] font-normal leading-[24px] text-secondery">
                  A part of the team that has built the front-end for an
                  enterprise-level web application in AngularJS. I've been a
                  part of a team that has built.
                </p>
                <h2 className="font-dmSans text-[30px] font-normal leading-[35px] mt-3 text-primary mb-4">
                  I can follow digital Trends
                </h2>
                <p className="font-roboto text-[16px] font-normal leading-[24px] text-secondery">
                  I've worked with a wide range of technologies, including MS
                  SQL Server and Python. One of my favorite characteristics of
                  an employer is their passion for the work they are doing.
                </p>
                <div className="flex gap-4 mt-8">
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

export default AboutPart;
