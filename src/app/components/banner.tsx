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
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:pt-[220px] pt-[120px] justify-center items-center mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=""
            >
              <h1 className="font-dmSans text-[32px] lg:text-[48px] font-normal leading-[40px] lg:leading-[57.6px] text-primary">
                <span className="font-dmSans text-[32px] lg:text-[48px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent font-normal leading-[40px] lg:leading-[57.6px] ">
                  Hello, I’m
                </span>{" "}
                Hamim Sardar
              </h1>

              <h2 className="font-dmSans text-[32px] lg:text-[48px] font-normal py-2 lg:py-3 leading-[40px] lg:leading-[57.6px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
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
                className="font-roboto text-[16px] lg:text-[18px] font-regular mb-[24px] leading-[14px] lg:leading-[24px] text-primarytwo w-autp lg:w-[580px] "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I’m a passionate Frontend Developer who loves building clean,
                responsive, and user-friendly web applications. With strong
                skills in React, Next.js, JavaScript, and Tailwind CSS, I focus
                on creating seamless digital experiences that bring designs to
                life. Always curious and learning, I enjoy turning ideas into
                interactive products.
              </motion.p>
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                  <button className="button">Say hello!</button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-auto lg:w-full lg:flex lg:justify-center lg:items-center lg:text-center">
                <Image
                  src="/hero-img.jpg"
                  alt="hero-img"
                  height={600}
                  width={801}
                  className="w-auto lg:w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
