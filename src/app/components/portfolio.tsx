import Image from "next/image";
import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="border-b-1 border-seconerycolor py-[120px]">
            <div className="text-center">
              <h4 className="font-roboto text-[48px] font-semibold leading-[56px] text-primary mb-8">
                Portfolio
              </h4>
              <p className="font-roboto text-[18px] font-regular leading-[24px] mb-[70px] text-primarytwo w-[577px] mx-auto">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="hover:shadow-xl/20 rounded-br-[8px] rounded-bl-[8px]">
                <Image
                  src="/portfolioimage2.png"
                  alt="profession"
                  height={248}
                  width={424}
                />
                <div className="py-8 px-8 bg-[#1B1448] border-2 border-t-0 border-[#E6E8EB] rounded-br-[8px] rounded-bl-[8px]">
                  <h4 className="font-roboto text-[12px] font-medium leading-[16px] text-primary">
                    FRONT-END DEVELOPMENT
                  </h4>
                  <h5 className="font-roboto text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-2">
                    CHATTING APPLICATION
                  </h5>
                  <p className="font-roboto text-[14px] font-regular leading-[16px] text-primary pt-2 w-[360px]">
                    Vivamus eleifend convallis ante, non pharetra libero
                    molestie laoreet. Donec id imperdiet lacus.
                  </p>
                  <div className="flex justify-between mt-6">
                    <div className="p-[2px] group rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="buttontwo flex items-center gap-1">
                          Repository{" "}
                          <FaSquareGithub className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </button>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="buttontwo  flex items-center gap-1">
                          Live Preview{" "}
                          <FaArrowRight className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:shadow-xl/20 rounded-br-[8px] rounded-bl-[8px]">
                <Image
                  src="/portfolioimage2.png"
                  alt="profession"
                  height={248}
                  width={424}
                />
                <div className="py-8 px-8 bg-[#1B1448] border-2 border-t-0 border-[#E6E8EB] rounded-br-[8px] rounded-bl-[8px]">
                  <h4 className="font-roboto text-[12px] font-medium leading-[16px] text-primary">
                    FRONT-END DEVELOPMENT
                  </h4>
                  <h5 className="font-roboto text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-2">
                    CHATTING APPLICATION
                  </h5>
                  <p className="font-roboto text-[14px] font-regular leading-[16px] text-primary pt-2 w-[360px]">
                    Vivamus eleifend convallis ante, non pharetra libero
                    molestie laoreet. Donec id imperdiet lacus.
                  </p>
                  <div className="flex justify-between mt-6">
                    <div className="p-[2px] group rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="buttontwo flex items-center gap-1">
                          Repository{" "}
                          <FaSquareGithub className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </button>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="buttontwo  flex items-center gap-1">
                          Live Preview{" "}
                          <FaArrowRight className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:shadow-xl/20 rounded-br-[8px] rounded-bl-[8px]">
                <Image
                  src="/portfolioimage2.png"
                  alt="profession"
                  height={248}
                  width={424}
                />
                <div className="py-8 px-8 bg-[#1B1448] border-2 border-t-0 border-[#E6E8EB] rounded-br-[8px] rounded-bl-[8px]">
                  <h4 className="font-roboto text-[12px] font-medium leading-[16px] text-primary">
                    FRONT-END DEVELOPMENT
                  </h4>
                  <h5 className="font-roboto text-[18px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-2">
                    CHATTING APPLICATION
                  </h5>
                  <p className="font-roboto text-[14px] font-regular leading-[16px] text-primary pt-2 w-[360px]">
                    Vivamus eleifend convallis ante, non pharetra libero
                    molestie laoreet. Donec id imperdiet lacus.
                  </p>
                  <div className="flex justify-between mt-6">
                    <div className="p-[2px] group rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="buttontwo flex items-center gap-1">
                          Repository{" "}
                          <FaSquareGithub className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </button>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="buttontwo  flex items-center gap-1">
                          Live Preview{" "}
                          <FaArrowRight className="text-lg text-[#2cb86f] group-hover:text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-[50px]">
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                  <button className="button">More Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
