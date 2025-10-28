import React from "react";
import { MdAddCall, MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Contact_Part = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="rounded-[15px]">
            <div className="grid grid-cols-2 px-[88px] py-[88px]">
              <div>
                <h3 className="font-roboto text-[38px] font-semibold leading-[50px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                  Let’s discuss your Project
                </h3>
                <p className="font-roboto text-[18px] font-normal leading-[24px] text-primarytwo mt-4  w-[481px] ">
                  There are many variations of passages of Lorem Ipsu available.
                  but the majority have suffered alte.
                </p>
                <div className="py-[35px] flex flex-col gap-3">
                  <div className="w-[390px] border-2 border-primary">
                    <div className="flex gap-[13px] py-6 pl-6 items-center hover:shadow-xl/20 hover:bg-secondery ">
                      <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px]">
                        <MdOutlineLocationOn className="h-[32px] w-[32px] text-primary " />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-primary">
                          Address:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                          New Mexico 31134
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-[390px] border-2 border-primary">
                    <div className="flex gap-[13px] py-6 pl-6 items-center hover:shadow-xl/20 hover:bg-secondery">
                      <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px]">
                        <MdOutlineMarkEmailUnread className="h-[32px] w-[32px] text-primary" />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-primary">
                          Email:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                          hamimsardar@118677@gmail.com
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-[390px] border-2 border-primary">
                    <div className="flex gap-[13px] py-6 pl-6 items-center hover:shadow-xl/20 hover:bg-secondery ">
                      <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px]">
                        <MdAddCall className="h-[32px] w-[32px] text-primary" />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-primary">
                          Contact:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                          +8801703-949775
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-block rounded-[8px]">
                  <ul className="flex gap-2 ">
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#193CB8] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaFacebookF className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#007B3D] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaDribbble className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#F70164] hover:text-primary hover:rounded-full">
                      <a href="">
                        <IoLogoInstagram className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#0A66C2] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaLinkedin className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primary bg-[#101635] rounded-full  hover:bg-[#2453FE] hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaBehance className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1B1448] px-6 py-6 rounded-[8px]">
                <p className="font-roboto text-[18px] font-normal leading-[24px] text-primarytwo w-[530px]">
                  There are many variations of passages of Lorem Ipsu available,
                  but the majority have suffered alte.
                </p>
                <div className="mt-[50px]">
                  <form className="rounded-2xl ">
                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Name*
                      </label>
                      <div className="group rounded-[8px] bg-[#101535] hover:bg-[#101535]/50 transition duration-300">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 border bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Gmail*
                      </label>
                      <div className="group rounded-[8px] bg-[#101535] hover:bg-[#101535]/50 transition duration-300">
                        <input
                          type="email"
                          placeholder="Enter your gmail"
                          className="w-full px-4 py-2 border bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Location*
                      </label>
                      <div className="group rounded-[8px] bg-[#101535] hover:bg-[#101535]/50 transition duration-300">
                        <input
                          type="text"
                          placeholder="Enter your location"
                          className="w-full px-4 py-2 border bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mb-6">
                      <div>
                        <label className="block text-primary font-medium mb-1">
                          Budget*
                        </label>
                        <div className="group rounded-[8px] bg-[#101535] hover:bg-[#101535]/50 transition duration-300">
                          <input
                            type="text"
                            placeholder="Enter your Budget"
                            className="w-full px-4 py-2 border bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-primary font-medium mb-1">
                          Subject*
                        </label>
                        <div className="group rounded-[8px] bg-[#101535] hover:bg-[#101535]/50 transition duration-300">
                          <input
                            type="text"
                            placeholder="Enter your Subject"
                            className="w-full px-4 py-2 border bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Message*
                      </label>
                      <div className="group rounded-[8px] bg-[#101535] hover:bg-[#101535]/50 transition duration-300">
                        <textarea
                          placeholder="Write your message..."
                          className="w-full px-4 py-2 border bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent border-primarytwo rounded-lg focus:outline-none focus:border-primary"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                      <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                        <button className="button">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_Part;
