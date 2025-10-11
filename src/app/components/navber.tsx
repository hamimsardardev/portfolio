import React from "react";
import Image from "next/image";

const Navber = () => {
  return (
    <>
      <header className="fixed w-full z-[9999] ">
        <nav className="absolute w-full bg-primarytwo">
          <div className="container">
            <div className="flex justify-between items-center py-3">
              <div>
                <Image src="/Logo.png" alt="Logo" height={56} width={181} />
              </div>
              <div>
                <ul className="flex justify-between gap-[60px] py-[10px]">
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
