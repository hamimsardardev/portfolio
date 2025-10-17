import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Testmonial = () => {
  return (
    <div>
      <section className="py-[100px] bg-gradient-to-bl from-[#D5EEF2] to-[#ffff] py-[112px]">
        <div className="container">
          <div className="text-center flex flex-col items-center justify-center mb-6">
            <h3 className="font-roboto text-[48px] font-semibold leading-[22px] text-primary">
              Testimonial
            </h3>

            <p className="font-roboto text-[18px] font-medium leading-[24px] mt-4 text-secondery max-w-[577px]">
              Appreciations from my clients
            </p>
          </div>
          <div className="text-center">
            <ul className="flex gap-2 justify-center items-center">
              <li>
                <IoStar className="text-primary text-[24px]" />
              </li>
              <li>
                <IoStar className="text-primary text-[24px]" />
              </li>
              <li>
                <IoStar className="text-primary text-[24px]" />
              </li>
              <li>
                <IoStar className="text-primary text-[24px]" />
              </li>
              <li>
                <IoStar className="text-primary text-[24px]" />
              </li>
            </ul>
            <p className="font-roboto text-[16px] font-normal leading-[24px] text-secondery py-5 mx-auto w-[629px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              autem ipsam illum fugiat culpa, voluptates pariatur dignissimos
              facere iure suscipit est harum delectus magni doloribus
              consectetur aperiam consequatur soluta voluptatem magnam nisi
              fugit hic? Aliquid libero et aperiam.!
            </p>
            <Image
              className="mx-auto rounded-full border-3 border-primary"
              src="/testmonianone.jpg"
              alt="testmonianone"
              height={100}
              width={100}
            />
            <div className="mt-3">
              <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                Hamim Sardar
              </h5>
              <p className="font-roboto text-[16px] font-normal leading-[24px] text-secondery">
                Business Man
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmonial;
