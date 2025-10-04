import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ClientsPart = () => {
  return (
    <>
      <section className="py-[100px] bg-[#FFFFFF]">
        <div className="container">
          <div className="text-center">
            <h3 className="font-geist text-[48px] font-semibold leading-[56px] text-primary">
              Happy Clients
            </h3>
            <p className="font-geist text-[18px] font-medium leading-[24px] my-6 text-secondery mx-auto w-[577px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
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
