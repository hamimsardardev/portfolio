"use client"

import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {
  MdAddCall,
  MdOutlineLocationOn,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const Footer = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <>
      <footer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-[#1B1448]"
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-2 items-center py-[36px]">
              <motion.div variants={fadeUp}>
                <Image src="/logo.png" alt="Logo" height={50} width={120} />
                <p className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[18px] md:leading-[20px] lg:leading-[24px] mt-4 text-primarytwo w-auto md:w-[360px] lg:w-[420px]">
                  I&apos;m a passionate MERN stack developer focused on creating
                  responsive, modern, and user-friendly web applications.
                  Whether you have a project idea or want to collaborate, feel
                  free to get in touch. Let&#39;s turn your vision into reality!
                </p>
              </motion.div>
              <div className="py-3 px-3 inline-block rounded-[8px] ">
                <motion.div variants={fadeUp}>
                  <h4 className="font-roboto text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary">
                    GET IN TOUCH WITH US
                  </h4>
                  <ul className="flex flex-col gap-2 mt-4">
                    <li className="flex items-center gap-3 font-roboto text-[16px] font-medium leading-[24px] hover:text-[#2cb86f] transition duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex items-center justify-center bg-[#101635] h-8 md:h-9 lg:h-[40px] w-8 md:w-9 lg:w-[40px] rounded-full hover:bg-[#141E26] cursor-pointer"
                      >
                        <MdAddCall className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px] text-white" />
                      </motion.div>
                      <a
                        href="tel:+8801703949775"
                        className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-normal text-primary hover:text-[#2cb86f]"
                      >
                        +880 1703-949775
                      </a>
                    </li>
                    <li className="flex items-center gap-3 font-roboto text-[16px] font-medium leading-[24px] hover:text-[#2cb86f] transition duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex items-center justify-center bg-[#101635] h-8 md:h-9 lg:h-[40px] w-8 md:w-9 lg:w-[40px] rounded-full hover:bg-[#141E26] cursor-pointer"
                      >
                        <MdOutlineMarkEmailUnread className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px] text-white" />
                      </motion.div>
                      <a href="#" className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-normal text-primary hover:text-[#2cb86f]">
                        hamimsardar118677@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3 font-roboto text-[16px] font-medium leading-[24px] hover:text-[#2cb86f] transition duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex items-center justify-center bg-[#101635] h-8 md:h-9 lg:h-[40px] w-8 md:w-9 lg:w-[40px] rounded-full hover:bg-[#141E26] cursor-pointer"
                      >
                        <MdOutlineLocationOn className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px] text-white" />
                      </motion.div>
                      <a href="#" className="font-roboto text-[12px] md:text-[16px] lg:text-[18px] font-normal text-primary hover:text-[#2cb86f]">
                        {"15A/8, Aktek Villa, Tekkapara, Mohammadpur"}
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div variants={fadeUp}>
                <div className="mb-4">
                  <h4 className="font-roboto text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary">
                    OUR SOCIAL MEDIA
                  </h4>
                </div>
                <ul className="flex gap-1 md:gap-2 lg:gap-2 mb-4">
                  <motion.li
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="py-4 md:py-[15px] lg:py-[15px] px-4 md:px-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full"
                  >
                    <a href="">
                      <FaFacebookF className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px]" />
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="py-4 md:py-[15px] lg:py-[15px] px-4 md:px-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full"
                  >
                    <a href="">
                      <FaDribbble className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px]" />
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="py-4 md:py-[15px] lg:py-[15px] px-4 md:px-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full"
                  >
                    <a href="">
                      <FaInstagram className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px]" />
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="py-4 md:py-[15px] lg:py-[15px] px-4 md:px-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full"
                  >
                    <a href="">
                      <FaLinkedin className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px]" />
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="py-4 md:py-[15px] lg:py-[15px] px-4 md:px-[15px] lg:px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full"
                  >
                    <a href="">
                      <FaBehance className="h-[12px] md:h-[18px] lg:h-[20px] w-[12px] md:w-[18px] lg:w-[20px]" />
                    </a>
                  </motion.li>
                </ul>
                <div>
                  <h6 className="font-roboto text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary">
                    NEWS LETTER
                  </h6>
                  <div className="mt-4 relative  border-2 border-primarytwo">
                    <input
                      type="email"
                      placeholder="Enter your gmail"
                      className=" font-roboto text-[16px] w-full text-regular pl-4 py-2"
                    />
                    <button
                      type="submit"
                      className="absolute font-roboto text-[16px] text-regular text-third bg-[#2cb86f] hover:text-primary hover:bg-third transition duration-300 px-4 py-2 left-[225px] md:left-[294px] lg:left-[346px] top-0 h-full focus:outline-none"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div>
          <div className="border-t border-primarytwo bg-[#101535]">
            <div className="container">
              <p className="font-roboto text-primarytwo text-center text-[14px] md:text-[16px] lg:text-[18px] font-normal py-4 md:py-6 lg:py-[30px] leading-[24px]">
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
