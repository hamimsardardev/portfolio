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
      <section className="bg-gradient-to-bl from-[#D5EEF2] to-[#ffff] py-[112px] py-[140px]">
        <div className="container">
          <div className="grid grid-cols-2 justify-center items-center">
            <div>
              <h3 className="font-roboto text-[15px] font-bold leading-[22px] text-third">Services</h3>
                <h2 className="font-roboto text-[30px] font-semibold leading-[35px] mt-3 text-primary mb-4">
                  What I Provide
                </h2>
              <p className="font-roboto text-[16px] font-normal leading-[24px] text-secondery w-[529px]">
                I've created and updated websites for many different clients. I worked with multiple CMS including WordPress, Joomla, and Drupal, as well as created my own custom website management system in Node.js
                <span className="block font-roboto text-[16px] font-normal leading-[24px] text-secondery mt-4 w-[529px]">
                  I've been part of the team that has built the front-end for an enterprise level web application in AngularJS. I've been a part of a team that has built a social network from scratch in Meteor
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="px-8 py-8 bg-white cursor-pointer hover:-translate-y-3 transition duration-300">
                <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] mb-7 hover:bg-primary">
                  <FaReact className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                </div>
                <h4 className="group font-roboto text-[20px] font-semibold leading-[24px] text-primary mb-3">
                  Front-End Development
                </h4>
                <p className="font-roboto text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="px-8 py-8 bg-white cursor-pointer hover:-translate-y-3 transition duration-300">
                <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] mb-7 hover:bg-primary">
                  <FaLaptopCode className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                </div>
                <h4 className="font-roboto text-[20px] font-semibold leading-[24px] text-primary mb-3">
                  Full-Stack Development
                </h4>
                <p className="font-roboto text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="px-8 py-8 bg-white cursor-pointer hover:-translate-y-3 transition duration-300">
                <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] mb-7 hover:bg-primary">
                  <FaNodeJs className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                </div>
                <h4 className="font-roboto text-[20px] font-semibold leading-[24px] text-primary mb-3">
                 Back-End Development
                </h4>
                <p className="font-roboto text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu.
                </p>
              </div>
              <div className="px-8 py-8 bg-white cursor-pointer hover:-translate-y-3 transition duration-300">
                <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] mb-7 hover:bg-primary">
                  <Monitor className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                </div>
                <h4 className="font-roboto text-[20px] font-semibold leading-[24px] text-primary mb-3">
                  Web Design
                </h4>
                <p className="font-roboto text-[16px] font-regular leading-[24px] text-secondery w-[248px]">
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

export default Services;
