import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

export function Test() {
  return (
    <Carousel className="container w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>              
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="py-[112px] border-b-1 border-seconerycolor">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="font-roboto text-[48px] font-semibold leading-tight bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                      Testimonial
                    </h3>
                    <p className="font-roboto text-[18px] font-medium leading-[24px] mt-4 text-primary max-w-[577px]">
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
                    <p className="font-roboto text-[16px] font-normal leading-[24px] text-primarytwo py-5 mx-auto w-[629px]">
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
                    <div className="mt-3">
                      <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                        Hamim Sardar
                      </h5>
                      <p className="font-roboto text-[16px] font-normal leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>              
            </Card>            
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>              
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="py-[112px] border-b-1 border-seconerycolor">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="font-roboto text-[48px] font-semibold leading-tight bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                      Testimonial
                    </h3>
                    <p className="font-roboto text-[18px] font-medium leading-[24px] mt-4 text-primary max-w-[577px]">
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
                    <p className="font-roboto text-[16px] font-normal leading-[24px] text-primarytwo py-5 mx-auto w-[629px]">
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
                    <div className="mt-3">
                      <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                        Hamim Sardar
                      </h5>
                      <p className="font-roboto text-[16px] font-normal leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>              
            </Card>            
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>              
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="py-[112px] border-b-1 border-seconerycolor">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="font-roboto text-[48px] font-semibold leading-tight bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                      Testimonial
                    </h3>
                    <p className="font-roboto text-[18px] font-medium leading-[24px] mt-4 text-primary max-w-[577px]">
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
                    <p className="font-roboto text-[16px] font-normal leading-[24px] text-primarytwo py-5 mx-auto w-[629px]">
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
                    <div className="mt-3">
                      <h5 className="font-roboto text-[16px] font-bold leading-[24px] text-primary">
                        Hamim Sardar
                      </h5>
                      <p className="font-roboto text-[16px] font-normal leading-[24px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent">
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>              
            </Card>            
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
