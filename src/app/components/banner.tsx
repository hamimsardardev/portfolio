"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 md:text-left lg:grid-cols-2 justify-center items-center lg:pt-[150px] pt-[120px] ">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-center md:text-left lg:text-left xl:text-left">
                <h1 className="flex flex-col gap-2 lg:flex-row font-dmSans text-[32px] lg:text-[48px] font-normal leading-[40px] lg:leading-[57.6px] text-primary">
                  <span className="font-dmSans text-[26px] lg:text-[48px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent font-normal leading-[40px] lg:leading-[57.6px] ">
                    Hello, I’m
                  </span>{" "}
                  Hamim Sardar
                </h1>

                <h2 className="font-dmSans text-[26px] lg:text-[48px] font-normal py-2 lg:py-3 leading-[40px] lg:leading-[57.6px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      "MERN Stack Developer",
                      2000,
                      "",
                      1000,
                      "Front End Developer",
                      2000,
                      "",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={30}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h2>

                <motion.p
                  className="font-roboto text-[16px] lg:text-[18px] font-regular mb-[24px] leading-[14px] lg:leading-[24px] text-primarytwo w-auto md:w-[350px] lg:w-[580px] "
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  I’m a passionate Frontend Developer who loves building clean,
                  responsive, and user-friendly web applications. With strong
                  skills in React, Next.js, JavaScript, and Tailwind CSS, I
                  focus on creating seamless digital experiences that bring
                  designs to life. Always curious and learning, I enjoy turning
                  ideas into interactive products.
                </motion.p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start lg:justify-start ">
                <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                  <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                    <button className="button px-5 py-2 text-[15px] sm:text-[16px]">
                      Say hello!
                    </button>
                  </div>
                </div>
                <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                  <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                    <button className="button px-5 py-2 text-[15px] sm:text-[16px]">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex justify-center items-center "
            >
              <Image
                src="/hero-img.png"
                alt="hero-img"
                height={700}
                width={801}
                className="w-auto lg:w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
