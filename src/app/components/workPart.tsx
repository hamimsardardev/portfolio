import React from "react";
import { BiNotepad } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";

const WorkPart = () => {
  return (
    <>
      <section className="bg-[#F0F1F3] pt-[248px] pb-[140px]">
        <div className="container">
          <div className="grid grid-cols-2 justify-center items-center">
            <div>
              <h3 className="font-dmSans text-[48px] font-semibold leading-[56px] text-primary mb-8">Work Process</h3>
              <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery w-[529px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                <span className="block font-dmSans text-[16px] font-regular leading-[24px] text-secondery mt-4 w-[529px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="px-8 py-8 bg-white">
                <div className="group py-[20px] px-[20px] bg-[#EDD8FF]/50 inline-block rounded-[6px] mb-7 hover:bg-[#A53DFF]">
                  <BiNotepad className="h-[32px] w-[32px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <h4 className="group font-dmSans text-[20px] font-semibold leading-[24px] text-primary mb-3">
                  1. Research
                </h4>
                <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="px-8 py-8 bg-white">
                <div className="group py-[20px] px-[20px] bg-[#EDD8FF]/50 inline-block rounded-[6px] mb-7 hover:bg-[#A53DFF]">
                  <IoAnalyticsOutline className="h-[32px] w-[32px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <h4 className="font-dmSans text-[20px] font-semibold leading-[24px] text-primary mb-3">
                  2. Analyze
                </h4>
                <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="px-8 py-8 bg-white">
                <div className="group py-[20px] px-[20px] bg-[#EDD8FF]/50 inline-block rounded-[6px] mb-7 hover:bg-[#A53DFF]">
                  <FaPen className="h-[32px] w-[32px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <h4 className="font-dmSans text-[20px] font-semibold leading-[24px] text-primary mb-3">
                 3. Design
                </h4>
                <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="px-8 py-8 bg-white">
                <div className="group py-[20px] px-[20px] bg-[#EDD8FF]/50 inline-block rounded-[6px] mb-7 hover:bg-[#A53DFF]">
                  <GrPersonalComputer className="h-[32px] w-[32px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <h4 className="font-dmSans text-[20px] font-semibold leading-[24px] text-primary mb-3">
                  4. Launch
                </h4>
                <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPart;
