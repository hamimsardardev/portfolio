import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ModeToggle } from "./darkMode";

const Navber = () => {
  return (
    <>
      <header className="fixed w-full z-[9999]">
        <motion.nav
          className="absolute w-full"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container">
            <div className="flex justify-between items-center px-2 py-3 backdrop-blur-md shadow-md rounded-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Image src="/Logo.png" alt="Logo" height={56} width={181} />
              </motion.div>
              <div>
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
              <ModeToggle />
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                  <button className="button">
                    CONTACT ME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>
    </>
  );
};

export default Navber;
