"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
      className="container mx-auto"
    >
      <CarouselContent className="flex ">
        {/* Slide 1 */}
        <CarouselItem className="basis-1/4 ">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimage1.png"
                  alt="blogimage1"
                  height={226}
                  width={312}
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <div className="px-6 py-6 bg-[#1B1448] rounded-b-[16px]">
                  <h4 className="font-dmSans text-[16px] font-medium leading-[20px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-6 mb-2">
                    22 Oct, 2020 / 246 Comments
                  </h4>
                  <h5 className="font-dmSans text-[18px] font-semibold leading-[24px] text-primarytwo [w-264px]">
                    Lorem ipsum dolor sit consea. Nulla purus arcu
                  </h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Slide 2 */}
        <CarouselItem className="basis-1/4">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimage2.png"
                  alt="blogimage1"
                  height={226}
                  width={312}
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <div className="px-6 py-6 bg-[#1B1448] rounded-b-[16px]">
                  <h4 className="font-dmSans text-[16px] font-medium leading-[20px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-6 mb-2">
                    22 Oct, 2020 / 246 Comments
                  </h4>
                  <h5 className="font-dmSans text-[18px] font-semibold leading-[24px] text-primarytwo [w-264px]">
                    Lorem ipsum dolor sit consea. Nulla purus arcu
                  </h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Slide 3 */}
        <CarouselItem className="basis-1/4">
          <Card>
             <CardContent>
              <div>
                <Image
                  src="/blogimage1.png"
                  alt="blogimage2"
                  height={226}
                  width={312}
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <div className="px-6 py-6 bg-[#1B1448] rounded-b-[16px]">
                  <h4 className="font-dmSans text-[16px] font-medium leading-[20px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-6 mb-2">
                    22 Oct, 2020 / 246 Comments
                  </h4>
                  <h5 className="font-dmSans text-[18px] font-semibold leading-[24px] text-primarytwo [w-264px]">
                    Lorem ipsum dolor sit consea. Nulla purus arcu
                  </h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        {/* Slide 4 */}
        <CarouselItem className="basis-1/4">
          <Card>
             <CardContent>
              <div>
                <Image
                  src="/blogimage1.png"
                  alt="blogimage1"
                  height={226}
                  width={312}
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <div className="px-6 py-6 bg-[#1B1448] rounded-b-[16px]">
                  <h4 className="font-dmSans text-[16px] font-medium leading-[20px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-6 mb-2">
                    22 Oct, 2020 / 246 Comments
                  </h4>
                  <h5 className="font-dmSans text-[18px] font-semibold leading-[24px] text-primarytwo [w-264px]">
                    Lorem ipsum dolor sit consea. Nulla purus arcu
                  </h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <Card>
             <CardContent>
              <div>
                <Image
                  src="/blogimage2.png"
                  alt="blogimage2"
                  height={226}
                  width={312}
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <div className="px-6 py-6 bg-[#1B1448] rounded-b-[16px]">
                  <h4 className="font-dmSans text-[16px] font-medium leading-[20px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent mt-6 mb-2">
                    22 Oct, 2020 / 246 Comments
                  </h4>
                  <h5 className="font-dmSans text-[18px] font-semibold leading-[24px] text-primarytwo [w-264px]">
                    Lorem ipsum dolor sit consea. Nulla purus arcu
                  </h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
