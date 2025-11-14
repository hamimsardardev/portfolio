"use client";

import Image from "next/image";
import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Portfolio = () => {
  const cardVariants = {
    right: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    left: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    bottom: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
  };
  return (
    <>
      <section>
        <div className="container overflow-hidden">
          <div className="border-b-1 border-seconerycolor py-12 md:py-[60px] lg:py-[90px]">
            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center"
            >
              <h4 className="font-roboto text-[30px] md:text-[36px] lg:text-[48px] font-semibold leading-[56px] text-primary mb-4 md:mb-6 lg:mb-8">
                Portfolio
              </h4>
              <p className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-regular leading-[24px] mb-[50px] md:mb-[60px] lg:mb-[70px] text-primarytwo mx-auto w-auto md:w-[480px] lg:w-[577px]">
                I design and develop modern, responsive, and high-performance
                web applications using the MERN stack (MongoDB, Express.js,
                React.js, Node.js), ensuring intuitive user experiences and
                visually compelling interfaces.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              <motion.div
                className="hover:shadow-xl/20 rounded-br-[8px] rounded-bl-[8px]"
                variants={cardVariants.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Image
                  src="/portfolioimage.png"
                  alt="portfolioimage"
                  height={148}
                  width={424}
                />
                <div className="flex flex-col items-center lg:items-start py-2 px-2 md:py-4 md:px-8 lg:py-8 lg:px-8 bg-[#1B1448] border-2 border-t-0 border-[#E6E8EB] rounded-br-[8px] rounded-bl-[8px]">
                  <h4 className="font-roboto text-[12px] font-medium leading-[16px] text-primary">
                    FRONT-END DEVELOPMENT
                  </h4>
                  <h5 className="font-roboto text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-2">
                    CHATTING APPLICATION
                  </h5>
                  <p className="font-roboto text-[14px] font-regular leading-[16px] text-primary pt-2 w-full md:w-[320px] lg:w-[350px] text-center lg:text-left">
                    Real-Time Chat Application built with React.js and Firebase
                    React.js, Firebase (Auth, Firestore), Tailwind CSS, Redux
                  </p>
                  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 mt-6">
                    <div className="p-[2px] group rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <Link
                          href={
                            "https://github.com/hamimsardardev/chattingapp_2405"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buttontwo flex items-center gap-1"
                        >
                          Repository{" "}
                          <FaSquareGithub className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <Link
                          href={"https://chattingapp-2405-v8ph.vercel.app/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buttontwo  flex items-center gap-1"
                        >
                          Live Preview{" "}
                          <FaArrowRight className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants.left}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="hover:shadow-xl/20 rounded-br-[8px] rounded-bl-[8px]"
              >
                <Image
                  src="/meternized.png"
                  alt="meternized"
                  height={248}
                  width={424}
                />
                <div className="flex flex-col items-center lg:items-start py-2 px-2 md:py-4 md:px-8 lg:py-8 lg:px-8 bg-[#1B1448] border-2 border-t-0 border-[#E6E8EB] rounded-br-[8px] rounded-bl-[8px]">
                  <h4 className="font-roboto text-[12px] font-medium leading-[16px] text-primary">
                    FRONT-END DEVELOPMENT
                  </h4>
                  <h5 className="font-roboto text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-2">
                    METERNIZED PROJECTS
                  </h5>
                  <p className="font-roboto text-[14px] font-regular leading-[16px] text-primary pt-2 w-full md:w-[320px] lg:w-[350px] text-center lg:text-left">
                    Built a responsive multi-page website with React.js,
                    Tailwind CSS, and React Router, reusable components and
                    smooth page navigation.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 mt-6">
                    <div className="p-[2px] group rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <Link
                          href={
                            "https://github.com/hamimsardardev/modernized_project"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buttontwo flex items-center gap-1"
                        >
                          Repository{" "}
                          <FaSquareGithub className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <Link
                          href={
                            "https://modernized-project-pud2vgzgj-hamimsardardevs-projects.vercel.app/"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buttontwo  flex items-center gap-1"
                        >
                          Live Preview{" "}
                          <FaArrowRight className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="hover:shadow-xl/20 rounded-br-[8px] rounded-bl-[8px]"
                variants={cardVariants.bottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Image
                  src="/seoldesign.png"
                  alt="seoldesign"
                  height={248}
                  width={424}
                />
                <div className="flex flex-col items-center lg:items-start py-2 px-2 md:py-4 md:px-8 lg:py-8 lg:px-8 bg-[#1B1448] border-2 border-t-0 border-[#E6E8EB] rounded-br-[8px] rounded-bl-[8px]">
                  <h4 className="font-roboto text-[12px] font-medium leading-[16px] text-primary">
                    FRONT-END DEVELOPMENT
                  </h4>
                  <h5 className="font-roboto text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-2">
                    SAULDESIGN PROJECT
                  </h5>
                  <p className="font-roboto text-[14px] font-regular leading-[16px] text-primary pt-2 w-full md:w-[320px] lg:w-[350px] text-center lg:text-left">
                    Built a responsive single-page website with React.js,
                    Tailwind CSS, and React Router, reusable components and
                    smooth page navigation.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 mt-6">
                    <div className="p-[2px] group rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <Link
                          href={
                            "https://github.com/hamimsardardev/sauldesign_project"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buttontwo flex items-center gap-1"
                        >
                          Repository{" "}
                          <FaSquareGithub className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <Link
                          href={"https://sauldesign-project.vercel.app/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buttontwo  flex items-center gap-1"
                        >
                          Live Preview{" "}
                          <FaArrowRight className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="text-center mt-[50px]">
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                  <button className="button">More Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
