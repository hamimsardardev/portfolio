import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-[url('/bannerimageone.png')] bg-cover bg-center">
        <div className="container">
          <div className="grid grid-cols-2 pt-[220px]">
            <div className="">
              <h1 className="font-dmSans text-[48px] font-normal leading-[57.6px] text-primary">
                <span className="font-dmSans text-[48px] text-third font-normal leading-[57.6px] ">Hello, I’m</span> Hamim Sardar
              </h1>
              <h2 className="font-dmSans text-[48px] font-normal py-3 leading-[57.6px] text-primary">
               MERN Stact Developer
              </h2>
              <p className="font-roboto text-[18px] font-regular mb-[24px] leading-[24px] text-secondery">
                I’m a passionate Frontend Developer who loves building clean,
                responsive, and user-friendly web applications. With strong
                skills in React, Next.js, JavaScript, and Tailwind CSS, I focus
                on creating seamless digital experiences that bring designs to
                life. Always curious and learning, I enjoy turning ideas into
                interactive products.
              </p>
              <div>
                <button className="button mb-[148px]">Say hello!</button>
              </div>
              <div className="flex gap-2">
                <div className="bg-[#EDD8FF]/50 py-[18px] w-[220px] flex flex-col items-center justify-center rounded-tl-[8px] rounded-bl-[8px]">
                  <h2 className="font-dmSans text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    1.5Y
                  </h2>
                  <p className="font-dmSans text-[16px] font-regulay leading-[24px] text-secondery">
                    Experiance
                  </p>
                </div>
                <div className="bg-[#EDD8FF]/50  w-[220px] flex flex-col items-center justify-center">
                  <h2 className="font-dmSans text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    15+
                  </h2>
                  <p className="font-dmSans text-[16px] font-regulay leading-[24px] text-secondery">
                    Project Completed
                  </p>
                </div>
                <div className="bg-[#EDD8FF]/50 w-[220px] flex flex-col items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
                  <h2 className="font-dmSans text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    05
                  </h2>
                  <p className="font-dmSans text-[16px] font-regular leading-[24px] text-secondery">
                    Happy Client
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center text-center">
                <Image src="/hero-img.jpg" alt="hero-img" height={600} width={801} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
