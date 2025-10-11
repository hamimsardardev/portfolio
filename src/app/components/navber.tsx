import React from "react";
import Image from "next/image";

const Navber = () => {
  return (
    <>
      <nav className="mt-[20px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <Image src="/Logo.png" alt="Logo" height={56} width={181} />
            </div>
            <div>
              <ul className="flex justify-between gap-[60px] py-[10px] font-roboto text-primary text-[20px]">
                <li className=" hover:text-third">
                  <a href="#">Home</a>
                </li>
                <li className=" hover:text-third">
                  <a href="#">About</a>
                </li>
                <li className=" hover:text-third">
                  <a href="#">Portfolio</a>
                </li>
                <li className=" hover:text-third">
                  <a href="#">Blog</a>
                </li>
                <li className=" hover:text-third">
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="button">Contact me</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
