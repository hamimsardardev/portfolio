import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Experiance = () => {
  return (
    <div>
      <section>
      <div className="container">
        <div className="text-center flex justify-center py-10 md:py-16 lg:py-[100px]">
          <motion.div
            className="flex flex-col md:flex-row lg:flex-row md:gap-[160px] lg:gap-[250px] gap-6 items-center justify-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <div className="flex flex-col items-center justify-between">
              <h2 className="font-dmSans text-[64px] mb-2 font-regular leading-[64px] text-primary">
                <CountUp start={0} end={5} duration={2} redraw={true} enableScrollSpy={true} />Y
              </h2>
              <p className="font-dmSans text-[16px] font-regular leading-[24px] text-primary">
                Experience
              </p>
            </div>

            <div className="flex flex-col items-center justify-between">
              <h2 className="font-dmSans text-[64px] mb-2 font-regular leading-[64px] text-primary">
                <CountUp start={0} end={15} duration={2} redraw={true} enableScrollSpy={true} />+
              </h2>
              <p className="font-dmSans text-[16px] font-regular leading-[24px] text-primary">
                Project Completed
              </p>
            </div>

            <div className="flex flex-col items-center justify-between">
              <h2 className="font-dmSans text-[64px] mb-2 font-regular leading-[64px] text-primary">
                <CountUp start={0} end={5} duration={2} redraw={true} enableScrollSpy={true} />
              </h2>
              <p className="font-dmSans text-[16px] font-regular leading-[24px] text-primary">
                Happy Client
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Experiance;
