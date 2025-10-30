"use client";

import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { MotionProps } from "framer-motion";

const Services = () => {
  const floatAnimation: MotionProps["animate"]  = {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-2 justify-center items-center border-b-1 border-seconerycolor py-[140px]">
            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className="font-roboto text-[24px] font-semibold leading-[22px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                Services
              </h3>
              <h2 className="font-roboto text-[30px] font-semibold leading-[35px] mt-3 text-primary mb-4">
                What I Provide
              </h2>
              <p className="font-roboto text-[16px] font-normal leading-[24px] text-primary w-[529px]">
                I have developed and maintained websites and web applications
                for a variety of clients using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). I have built Chatting
                application and scalable web solutions from scratch.
                <span className="block font-roboto text-[16px] font-normal leading-[24px] text-primary mt-4 w-[529px]">
                  I have also been part of teams that developed enterprise-level
                  applications and complex social platforms, delivering
                  responsive, high-performance, and user-friendly solutions.
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                animate={floatAnimation}
                className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block"
              >
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Front-End Development
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[248px]">
                      I build responsive, interactive, and user-friendly
                      front-end interfaces using React.js and modern web
                      technologies.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  ...floatAnimation,
                  transition: { ...floatAnimation.transition, delay: 0.5 },
                }}
                className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block"
              >
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Full-Stack Development
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[248px]">
                      I develop web applications using the MERN stack,
                      delivering scalable, high-performance, and user-friendly
                      solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  ...floatAnimation,
                  transition: { ...floatAnimation.transition, delay: 1 },
                }}
                className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block"
              >
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Back-End Development
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[260px]">
                      I design and develop back-end systems using Node.js,
                      Express.js, and MongoDB, ensuring high performance
                      front-end applications.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  ...floatAnimation,
                  transition: { ...floatAnimation.transition, delay: 1.5 },
                }}
                className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block"
              >
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Web Design
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[260px]">
                      I create modern, responsive, and user-friendly web designs
                      that provide an engaging user experience and visually
                      appealing interfaces.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
