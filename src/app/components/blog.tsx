"use client";
import React from "react";
import { CarouselSize } from "./CarouselSize";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="border-b-1 border-seconerycolor py-[80px] md:py-[80px] lg:py-[112px]">
            <motion.div
              className="text-center mb-[30px] md:mb-[50px] lg:mb-[70px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h5
                className="font-dmSans text-[36px] md:text-[40px] lg:text-[48px] font-normal md:font-medium lg:font-semibold leading-[30px] md:leading-[50px]  lg:leading-[66px] text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Blog
              </motion.h5>

              <motion.p
                className="font-dmSans text-[14px] md:text-[16px] lg:text-[18px] font-regular leading-[16px] md:leading-[20px] lg:leading-[26px] text-primarytwo w-auto md:w-[480px] lg:w-[540px] mx-auto mt-3 md:mt-4 lg:mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore my thoughts, tutorials, and experiences in web
                development. I share practical tips, MERN stack tutorials, and
                industry best practices to help developers and tech enthusiasts
                stay updated with modern web technologies.
              </motion.p>
            </motion.div>
            <CarouselSize />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
