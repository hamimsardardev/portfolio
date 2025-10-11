import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ClientsPart = () => {
  return (
    <>
      <section className="py-[100px] bg-[#FFFFFF]">
        <div className="container">
          <div className="text-center">
            <h3 className="font-roboto text-[28px] font-semibold leading-[56px] text-thirdcolor">
              Companies worked
            </h3>
            <h4 className="font-roboto text-[48px] font-semibold leading-[56px] text-primary">
              Companies I have work with
            </h4>
            <p className="font-roboto text-[18px] font-medium leading-[24px] my-6 text-secondery mx-auto w-[577px]">
              I’ve been working asweb developer for the past two years & have experience in multiple frameworks. I’m passionate about creating high quality products and beautiful user interfaces, giving my users the best experience they could possibly expect.
            </p>
          </div>
          <div>
            <Marquee pauseOnHover speed={50}>
              <div className="flex gap-6 py-2 items-center">
                <Image
                  className="hover hover:cursor-pointer hover:text-red-500"
                  src="/google.png"
                  alt="google"
                  height={200}
                  width={200}
                />
                <Image
                  className="hover hover:cursor-pointer"
                  src="/dribbble.png"
                  alt="dribbble"
                  height={200}
                  width={200}
                />
                <Image
                  className="hover hover:cursor-pointer"
                  src="/medium.png"
                  alt="medium"
                  height={200}
                  width={200}
                />
                <Image
                  className="hover hover:cursor-pointer"
                  src="/amazon.png"
                  alt="amazon"
                  height={200}
                  width={200}
                />
                <Image
                  className="hover hover:cursor-pointer"
                  src="/spotify.png"
                  alt="spotify"
                  height={200}
                  width={200}
                />
                <Image
                  className="hover hover:cursor-pointer"
                  src="/linkedin.png"
                  alt="linkedin"
                  height={200}
                  width={200}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsPart;
