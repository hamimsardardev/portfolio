import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ModeToggle } from "./darkMode";

const Navber = () => {
  return (
    <>
      <header className="fixed w-full z-[9999]">
        <motion.nav
          className="absolute w-full mt-2"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container">
            <div className="flex justify-between items-center px-2 py-3 bg-gradient-to-l from-[#ffff] to-[#D5EEF2] backdrop-blur-md shadow-md rounded-xl">
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
                    className="font-roboto font-semibold text-primary text-[16px] leading-[24px] hover:text-third"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Home</a>
                  </motion.li>
                  <motion.li
                    className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">About</a>
                  </motion.li>
                  <motion.li
                    className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Services</a>
                  </motion.li>

                  <motion.li
                    className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Skills</a>
                  </motion.li>
                  <motion.li
                    className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <a href="#">Portfolio</a>
                  </motion.li>
                </ul>
              </div>
              <ModeToggle/>
              <div>
                <button className="button">CONTACT ME</button>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>
    </>
  );
};

export default Navber;
