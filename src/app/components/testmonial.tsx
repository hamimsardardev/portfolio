import React from "react";
import { IoStar } from "react-icons/io5";

const Testmonial = () => {
  return (
    <div>
      <section className="py-[100px]">
        <div className="container">
          <div className="text-center flex flex-col items-center justify-center mb-[50px]">
            <h3 className="font-dmSans text-[48px] font-semibold leading-[22px] text-primary">
              Testimonial
            </h3>

            <p className="font-dmSans text-[18px] font-medium leading-[24px] my-6 text-secondery max-w-[577px]">
              Appreciations from my clients
            </p>
          </div>
            <ul className="flex gap-2 justify-center items-center">
              <li>
                <IoStar className="text-[#A53DFF] text-[24px]" />
              </li>
              <li>
                <IoStar className="text-[#A53DFF] text-[24px]" />
              </li>
              <li>
                <IoStar className="text-[#A53DFF] text-[24px]" />
              </li>
              <li>
                <IoStar className="text-[#A53DFF] text-[24px]" />
              </li>
              <li>
                <IoStar className="text-[#A53DFF] text-[24px]" />
              </li>
            </ul>
        </div>
      </section>
    </div>
  );
};

export default Testmonial;
