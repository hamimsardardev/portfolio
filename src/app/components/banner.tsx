"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <>
      <section className="bg-[url('/bannerimageone.png')] bg-cover bg-center">
        <div className="container">
          <div className="grid grid-cols-2 pt-[220px]">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="font-dmSans text-[48px] font-normal leading-[57.6px] text-primary">
                <span className="font-dmSans text-[48px] text-third font-normal leading-[57.6px] ">
                  Hello, I’m
                </span>{" "}
                Hamim Sardar
              </h1>

              <h2 className="font-dmSans text-[48px] font-normal py-3 leading-[57.6px] text-primary">
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
                className="font-roboto text-[18px] font-regular mb-[24px] leading-[24px] text-secondery"
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

              <div>
                <button className="button mb-[148px]">Say hello!</button>
              </div>

              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1, duration: 0.9 }}
              >
                <div className="bg-[#EDD8FF]/50 py-[18px] w-[220px] flex flex-col items-center justify-center rounded-tl-[8px] rounded-bl-[8px]">
                  <h2 className="font-dmSans text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    <CountUp start={0} end={5} duration={2} redraw={true} />Y
                  </h2>
                  <p className="font-dmSans text-[16px] font-regulay leading-[24px] text-secondery">
                    Experience
                  </p>
                </div>

                <div className="bg-[#EDD8FF]/50 w-[220px] flex flex-col items-center justify-center">
                  <h2 className="font-dmSans text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    <CountUp start={0} end={15} duration={2} redraw={true} />+
                  </h2>
                  <p className="font-dmSans text-[16px] font-regulay leading-[24px] text-secondery">
                    Project Completed
                  </p>
                </div>

                <div className="bg-[#EDD8FF]/50 w-[220px] flex flex-col items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
                  <h2 className="font-dmSans text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    <CountUp start={0} end={5} duration={2} redraw={true} />
                  </h2>
                  <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery">
                    Happy Client
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex justify-center items-center text-center">
                <Image
                  src="/hero-img.jpg"
                  alt="hero-img"
                  height={600}
                  width={801}
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
