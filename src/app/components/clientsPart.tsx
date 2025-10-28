import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ClientsPart = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="py-[112px] border-b-1 border-seconerycolor">
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
                className="font-roboto text-[28px] font-semibold leading-[56px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent"
              >
                Companies worked
              </motion.h3>

              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-roboto text-[48px] font-semibold leading-[56px] text-primary"
              >
                Companies I have work with
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-roboto text-[18px] font-medium leading-[24px] my-6 text-primarytwo mx-auto w-[577px]"
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
              <Marquee pauseOnHover speed={50}>
                <div className="flex gap-6 py-2 items-center">
                  <Image
                    className="hover hover:cursor-pointer hover:text-red-500"
                    src="/google.png"
                    alt="google"
                    height={200}
                    width={200}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/dribbble.png"
                    alt="dribbble"
                    height={200}
                    width={200}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/medium.png"
                    alt="medium"
                    height={200}
                    width={200}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/amazon.png"
                    alt="amazon"
                    height={200}
                    width={200}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/spotify.png"
                    alt="spotify"
                    height={200}
                    width={200}
                  />
                  <Image
                    className="hover hover:cursor-pointer"
                    src="/linkedin.png"
                    alt="linkedin"
                    height={200}
                    width={200}
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
