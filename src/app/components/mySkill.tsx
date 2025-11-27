"use client"

import Image from "next/image";
import React from "react";

const MySkill = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className=" text-center mb-4 border-b-1 border-seconerycolor py-12 md:py-18 lg:py-[100px]">
            <h4 className="font-roboto text-[30px] md:text-[36px] lg:text-[48px] font-bold leading-[56px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent inline-block mb-3 md:mb-4 lg:mb-6">
              My Skills
            </h4>

            <p className="font-roboto text-[16px] font-normal leading-[24px] mx-auto text-primarytwo mb-3 w-auto md:w-auto lg:w-[529px]">
              I&apos;ve created and updated websites for many different clients.
              I worked with multiple CMS including WordPress, Joomla, and
              Drupal, as well as created my own custom website management system
              in Node.js.
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className=" grid grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:gap-[100px] justify-center items-center">
                <Image
                  className="border-2 border-primarytwo py-4 px-4 rounded-full"
                  src="/html.png"
                  alt="html.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full"
                  src="/css.png"
                  alt="css.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full"
                  src="/js.png"
                  alt="js.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full flex justify-end"
                  src="/react.png"
                  alt="react.png"
                  height={100}
                  width={100}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:flex lg:gap-[100px] justify-center items-center mt-6">
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full"
                  src="/vscode.png"
                  alt="vscode.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full text-primarytwo"
                  src="/git.png"
                  alt="git.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full"
                  src="/github.png"
                  alt="github.png"
                  height={100}
                  width={100}
                />
                <Image
                  className="border-2 border-primarytwo py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-full"
                  src="/bootstrap.png"
                  alt="bootstrap.png"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkill;
