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
          <div className="bg-[#F0F1F3] rounded-[15px]">
            <div className="grid grid-cols-2 px-[88px] py-[88px]">
              <div>
                <h3 className="font-roboto text-[38px] font-semibold leading-[50px] text-primary">
                  Let’s discuss your Project
                </h3>
                <p className="font-roboto text-[18px] font-normal leading-[24px] text-secondery mt-4  w-[481px] ">
                  There are many variations of passages of Lorem Ipsu available.
                  but the majority have suffered alte.
                </p>
                <div className="py-[35px]">
                  {" "}
                  <div className="w-[390px]">
                    <div className="flex gap-[13px] py-6 pl-6   items-center rounded-[10px] hover:shadow-xl/20 hover:bg-white ">
                      <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] hover:bg-primary">
                        <MdOutlineLocationOn className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-secondery">
                          Address:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] text-primary">
                          New Mexico 31134
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-[390px]">
                    <div className="flex gap-[13px] py-6 pl-6   items-center rounded-[10px] hover:shadow-xl/20 hover:bg-white ">
                      <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] hover:bg-primary">
                        <MdOutlineMarkEmailUnread className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-secondery">
                          Email:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] text-primary">
                          hamimsardar@118677@gmail.com
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-[390px]">
                    <div className="flex gap-[13px] py-6 pl-6   items-center rounded-[10px] hover:shadow-xl/20 hover:bg-white ">
                      <div className="group py-[20px] px-[20px] border-2 border-primary inline-block rounded-[6px] hover:bg-primary">
                        <MdAddCall className="h-[32px] w-[32px] text-primary group-hover:text-primarytwo" />
                      </div>
                      <div>
                        <p className="font-roboto text-[18px] font-normal leading-[20px] mb-1 text-secondery">
                          Contact:
                        </p>
                        <h5 className="font-roboto text-[16px] font-medium leading-[24px] text-primary">
                          +8801703-949775
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-3 px-3 bg-primary inline-block rounded-[8px]">
                  <ul className="flex gap-2 ">
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaFacebookF className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaDribbble className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <IoLogoInstagram className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaLinkedin className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                    <li className="py-[15px] px-[15px] text-primarytwo  hover:bg-primarytwo hover:text-primary hover:rounded-full">
                      <a href="">
                        <FaBehance className="h-[20px] w-[20px]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-roboto text-[18px] font-normal leading-[24px] text-secondery w-[560px]">
                  There are many variations of passages of Lorem Ipsu available,
                  but the majority have suffered alte.
                </p>
                <div className="mt-[50px]">
                  <form className="rounded-2xl ">
                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Name*
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border text-secondery border-gray-300 rounded-lg focus:outline-none focus:border-[#A53DFF]"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Gmail*
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your gmail"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A53DFF]"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Location*
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your location"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A53DFF]"
                      />
                    </div>
                    <div className="flex justify-between mb-6">
                      <div>
                        <label className="block text-primary font-medium mb-1">
                          Budget*
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Budget"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A53DFF]"
                        />
                      </div>
                      <div>
                        <label className="block text-primary font-medium mb-1">
                          Subject*
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Subject"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A53DFF]"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-primary font-medium mb-1">
                        Message*
                      </label>
                      <textarea
                        placeholder="Write your message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-[#A53DFF]"
                      ></textarea>
                    </div>

                    <button type="submit" className="button">
                      Submit
                    </button>
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
