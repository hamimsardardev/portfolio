import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-2 my-[220px]">
            <div className="">
              <h1 className="font-geist text-[72px] font-semibold mb-[24px] leading-[84px] text-primary">
                Hello, I’m Hamim Sardar
              </h1>
              <p className="font-geist text-[18px] font-regular mb-[24px] leading-[24px] text-secondery">
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
                  <h2 className="font-geist text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    15Y
                  </h2>
                  <p className="font-geist text-[16px] font-regulay leading-[24px] text-secondery">
                    Experiance
                  </p>
                </div>
                <div className="bg-[#EDD8FF]/50  w-[220px] flex flex-col items-center justify-center">
                  <h2 className="font-geist text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    250+
                  </h2>
                  <p className="font-geist text-[16px] font-regulay leading-[24px] text-secondery">
                    Project Completed
                  </p>
                </div>
                <div className="bg-[#EDD8FF]/50 w-[220px] flex flex-col items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
                  <h2 className="font-geist text-[36px] mb-2 font-semibold leading-[40px] text-[#424E60]">
                    58
                  </h2>
                  <p className="font-geist text-[16px] font-regular leading-[24px] text-secondery">
                    Happy Client
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center text-center">
                <Image src="/bannerimage.png" alt="banner" height={536} width={636} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
