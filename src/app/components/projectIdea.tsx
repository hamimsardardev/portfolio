import React from "react";
import { motion } from "framer-motion";

const ProjectIdea = () => {
  return (
    <div>
      <section className="relative bg-[url('/letsdoimage.jpg')] bg-cover bg-center">
        <div className="bg-[#0B043A]/50">
          <div className="container">
            <div className="text-center py-[100px] relative">
              <motion.div
                className="absolute bubble top-10 left-10 w-6 h-6 rounded-full bg-[#2cb86f]/70"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bubble bottom-20 right-20 w-4 h-4 rounded-full bg-[#3381bf]/70"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.h4
                className="font-dmSans text-[48px] font-semibold leading-[56px] w-[619px] mx-auto text-primary animate-gradient"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                Do you have Project Idea? Let&#39;s discuss your project!
              </motion.h4>

              <motion.p
                className="font-dmSans text-[18px] font-regular leading-[24px] text-primarytwo py-8 mx-auto w-[615px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I specialize in delivering end-to-end solutions using the MERN stack (MongoDB, Express, React, Node.js). From crafting seamless user experiences to designing robust backends, I ensure your project is not just functional, but scalable, responsive, and tailored to your goals. Let&#39;s collaborate and turn your vision into a polished, real-world application.
              </motion.p>

              <motion.div
                className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="group rounded-[8px] bg-third hover:bg-[#141E26] transition duration-300">
                  <button className="button transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    Let&#39;s work Together
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectIdea;
