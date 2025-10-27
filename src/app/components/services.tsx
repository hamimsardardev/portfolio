import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaNodeJs, FaDatabase } from "react-icons/fa";
import { FaPalette, FaDraftingCompass } from "react-icons/fa";
import { Layout, Palette, Monitor } from "lucide-react";

const Services = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-2 justify-center items-center border-b-1 border-seconerycolor py-[140px]">
            <div>
              <h3 className="font-roboto text-[24px] font-semibold leading-[22px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                Services
              </h3>
              <h2 className="font-roboto text-[30px] font-semibold leading-[35px] mt-3 text-primary mb-4">
                What I Provide
              </h2>
              <p className="font-roboto text-[16px] font-normal leading-[24px] text-primary w-[529px]">
                I've created and updated websites for many different clients. I
                worked with multiple CMS including WordPress, Joomla, and
                Drupal, as well as created my own custom website management
                system in Node.js
                <span className="block font-roboto text-[16px] font-normal leading-[24px] text-primary mt-4 w-[529px]">
                  I've been part of the team that has built the front-end for an
                  enterprise level web application in AngularJS. I've been a
                  part of a team that has built a social network from scratch in
                  Meteor
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Front-End Development
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[248px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Full-Stack Development
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[248px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Back-End Development
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[248px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-[2px] hover:-translate-y-3 transition duration-300  bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                <div className="group bg-third hover:bg-secondery transition duration-300">
                  <div className="px-8 py-8 backdrop-blur-md  cursor-pointer">
                    <div className=" py-[20px] px-[20px] border-1 border-primary inline-block rounded-[6px] mb-7 group-hover:bg-secondery">
                      <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primary" />
                    </div>
                    <h4 className="font-roboto text-[20px] font-semibold leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mb-3">
                      Web Design
                    </h4>
                    <p className="font-roboto text-[16px] font-regular leading-[24px] text-primary w-[248px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
