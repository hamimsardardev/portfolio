"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ModeToggle } from "./darkMode";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navber = () => {
  const [navbarshow, setNavbarshow] = useState(false);

  const handleshownavbar = () => {
    setNavbarshow(!navbarshow);
  };

  return (
    <>
      <header className="fixed w-full z-[9999]">
        <motion.nav
          className="absolute w-full"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-3 backdrop-blur-md shadow-md rounded-xl">
              {/* -------- Logo -------- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Image src="/logo.png" alt="Logo" height={50} width={120} />
              </motion.div>

              {/* -------- Desktop Menu -------- */}
              <div className="hidden lg:block">
                <ul className="flex justify-between gap-[60px] py-[10px] border-2 border-primary rounded-full shadow-sm px-4">
                  <motion.li
                    className="font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[16px] leading-[24px] hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Home</a>
                  </motion.li>
                  <motion.li
                    className="font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent  text-[16px] leading-[24px]  hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">About</a>
                  </motion.li>
                  <motion.li
                    className="font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent  text-[16px] leading-[24px]  hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Services</a>
                  </motion.li>

                  <motion.li
                    className="font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent  text-[16px] leading-[24px]  hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Skills</a>
                  </motion.li>
                  <motion.li
                    className="font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[16px] leading-[24px]  hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Portfolio</a>
                  </motion.li>
                </ul>
              </div>

              {/* -------- Mode Toggle -------- */}
              <ModeToggle />

              {/* -------- Desktop Button -------- */}
              <div className="hidden lg:inline-block p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf]">
                <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                  <button className="font-roboto font-semibold text-white py-2 px-6 text-[16px] tracking-wide">
                    CONTACT ME
                  </button>
                </div>
              </div>

              {/* -------- Mobile Icon -------- */}
              <div className="lg:hidden">
                {navbarshow ? (
                  <AiOutlineCloseCircle
                    onClick={handleshownavbar}
                    className="text-white text-4xl cursor-pointer"
                  />
                ) : (
                  <FaBarsProgress
                    onClick={handleshownavbar}
                    className="text-white text-4xl cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>

          {/* -------- Mobile Menu -------- */}
          {navbarshow && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-[80px] right-[20px] w-[80%] sm:w-[60%] bg-white border-primary rounded-2xl shadow-lg p-6 items-center flex flex-col gap-6 z-[9998] backdrop-blur-md"
            >
              <li className="list-none font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[17px] leading-[24px] hover:scale-110 transition-transform">
                <a href="#">Home</a>
              </li>
              <li className="list-none font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[17px] leading-[24px] hover:scale-110 transition-transform">
                <a href="#">About</a>
              </li>
              <li className="list-none font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[17px] leading-[24px] hover:scale-110 transition-transform">
                <a href="#">Services</a>
              </li>
              <li className="list-none font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[17px] leading-[24px] hover:scale-110 transition-transform">
                <a href="#">Skills</a>
              </li>
              <li className="list-none font-roboto font-semibold bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent text-[17px] leading-[24px] hover:scale-110 transition-transform">
                <a href="#">Portfolio</a>
              </li>

              {/* -------- Contact Button নিচে -------- */}
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                  <button className="button">CONTACT ME</button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.nav>
      </header>
    </>
  );
};

export default Navber;
