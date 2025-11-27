"use client"
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ClientsPart = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="py-[60px] md:py-[80px] lg:py-[112px] border-b-1 border-seconerycolor">
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
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="font-roboto text-[18px] md:text-[24px] lg:text-[28px] font-semibold leading-[30px] md:leading-[36px] lg:leading-[56px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent"
              >
                Companies worked
              </motion.h3>

              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-roboto text-[36px] md:text-[42px] lg:text-[48px] font-normal md:font-semibold lg:font-semibold leading-[36px] md:leading-[42px] lg:leading-[56px] text-primary"
              >
                Companies I have work with
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[18px] md:leading-[20pz] lg:leading-[24px] my-3 md:my-4 lg:my-6 text-primarytwo mx-auto w-auto md:w-[520px] lg:w-[577px]"
              >
                I’ve been working as a web developer for the past two years &
                have experience in multiple frameworks. I’m passionate about
                creating high quality products and beautiful user interfaces,
                giving my users the best experience they could possibly expect.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Marquee pauseOnHover autoFill speed={50}>
                <div className="flex gap-1 md:gap-4 lg:gap-6 py-2 items-center">
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/google.png"
                    alt="google"
                    height={70}
                    width={150}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/dribbble.png"
                    alt="dribbble"
                    height={70}
                    width={150}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/medium.png"
                    alt="medium"
                    height={70}
                    width={150}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/amazon.png"
                    alt="amazon"
                    height={70}
                    width={150}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/spotify.png"
                    alt="spotify"
                    height={70}
                    width={150}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/linkedin.png"
                    alt="linkedin"
                    height={70}
                    width={150}
                  />
                </div>
              </Marquee>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsPart;
