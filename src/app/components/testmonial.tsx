import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testmonial = () => {
  return (
    <div>
      <div className="container">
        <div className="border-b-1 border-primarytwo">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="py-[60px] md:py-[80px] lg:py-[112px]">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="font-roboto text-[32px] md:text-[36px] lg:text-[48px] font-semibold leading-tight bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                      Testimonial
                    </h3>

                    <p className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[16px] md:leading-[20px] lg:leading-[24px] mt-4 text-primary w-auto md:w-[520px] lg:w-[577px]">
                      Appreciations from my clients
                    </p>
                  </div>

                  <div className="text-center mt-2">
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
                    <p className="font-roboto text-[14px] md:text-[16px] lg:text-[16px] font-normal leading-[16px] md:leading-[20px] lg:leading-[24px] text-primarytwo py-2 md:py-3 lg:py-5 mx-auto w-auto md:w-[620px] lg:w-[629px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eos autem ipsam illum fugiat culpa, voluptates pariatur
                      dignissimos facere iure suscipit est harum delectus magni
                      doloribus consectetur aperiam consequatur soluta
                      voluptatem magnam nisi fugit hic? Aliquid libero et
                      aperiam.!
                    </p>
                    <Image
                      className="mx-auto rounded-full border-3 border-primary"
                      src="/testmonianone.jpg"
                      alt="testmonianone"
                      height={100}
                      width={100}
                    />
                    <div className="mt-1 md:mt-2 lg:mt-3">
                      <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                        Hamim Sardar
                      </h5>
                      <p className="font-roboto text-[16px] font-normal leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="py-[60px] md:py-[80px] lg:py-[112px]">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="font-roboto text-[32px] md:text-[36px] lg:text-[48px] font-semibold leading-tight bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                      Testimonial
                    </h3>

                    <p className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[16px] md:leading-[20px] lg:leading-[24px] mt-4 text-primary w-auto md:w-[520px] lg:w-[577px]">
                      Appreciations from my clients
                    </p>
                  </div>

                  <div className="text-center mt-2">
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
                    <p className="font-roboto text-[14px] md:text-[16px] lg:text-[16px] font-normal leading-[16px] md:leading-[20px] lg:leading-[24px] text-primarytwo py-2 md:py-3 lg:py-5 mx-auto w-auto md:w-[620px] lg:w-[629px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eos autem ipsam illum fugiat culpa, voluptates pariatur
                      dignissimos facere iure suscipit est harum delectus magni
                      doloribus consectetur aperiam consequatur soluta
                      voluptatem magnam nisi fugit hic? Aliquid libero et
                      aperiam.!
                    </p>
                    <Image
                      className="mx-auto rounded-full border-3 border-primary"
                      src="/testmonianone.jpg"
                      alt="testmonianone"
                      height={100}
                      width={100}
                    />
                    <div className="mt-1 md:mt-2 lg:mt-3">
                      <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                        Hamim Sardar
                      </h5>
                      <p className="font-roboto text-[16px] font-normal leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="py-[60px] md:py-[80px] lg:py-[112px]">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="font-roboto text-[32px] md:text-[36px] lg:text-[48px] font-semibold leading-tight bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                      Testimonial
                    </h3>

                    <p className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[16px] md:leading-[20px] lg:leading-[24px] mt-4 text-primary w-auto md:w-[520px] lg:w-[577px]">
                      Appreciations from my clients
                    </p>
                  </div>

                  <div className="text-center mt-2">
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
                    <p className="font-roboto text-[14px] md:text-[16px] lg:text-[16px] font-normal leading-[16px] md:leading-[20px] lg:leading-[24px] text-primarytwo py-2 md:py-3 lg:py-5 mx-auto w-auto md:w-[620px] lg:w-[629px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eos autem ipsam illum fugiat culpa, voluptates pariatur
                      dignissimos facere iure suscipit est harum delectus magni
                      doloribus consectetur aperiam consequatur soluta
                      voluptatem magnam nisi fugit hic? Aliquid libero et
                      aperiam.!
                    </p>
                    <Image
                      className="mx-auto rounded-full border-3 border-primary"
                      src="/testmonianone.jpg"
                      alt="testmonianone"
                      height={100}
                      width={100}
                    />
                    <div className="mt-1 md:mt-2 lg:mt-3">
                      <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                        Hamim Sardar
                      </h5>
                      <p className="font-roboto text-[16px] font-normal leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
             
              
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
