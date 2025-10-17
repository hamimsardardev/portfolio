import React from "react";
import Image from "next/image";

const Navber = () => {
  return (
    <>
    
      <header className="fixed w-full z-[9999]">
        <nav className="absolute w-full mt-2  ">
          <div className="container">
            <div className="flex justify-between items-center px-2 py-3 bg-gradient-to-l from-[#ffff] to-[#D5EEF2] backdrop-blur-md shadow-md rounded-xl">
              <div>
                <Image src="/Logo.png" alt="Logo" height={56} width={181} />
              </div>
              <div>
                <ul className="flex justify-between gap-[60px] py-[10px] border-2 border-primary rounded-full shadow-sm px-4">
                  <li className="font-roboto font-semibold text-primary text-[16px] leading-[24px]  hover:text-third">
                    <a href="#">Home</a>
                  </li>
                  <li className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third">
                    <a href="#">About</a>
                  </li>
                  <li className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third">
                    <a href="#">Services</a>
                  </li>

                  <li className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third">
                    <a href="#">Skills</a>
                  </li>
                  <li className="font-roboto font-semibold text-primary  text-[16px] leading-[24px]  hover:text-third">
                    <a href="#">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div>
                <button className="button">CONTACT ME</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navber;
