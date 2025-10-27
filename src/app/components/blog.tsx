"use client";
import React from "react";
import { CarouselSize } from "./CarouselSize";

const Blog = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="border-b-1 border-seconerycolor py-[112px]">
            <div className="text-center mb-[70px]">
              <h5 className="font-dmSans text-[48px] font-semibold leading-[66px] text-primary">
                Blog
              </h5>
              <p className="font-dmSans text-[18px] font-regular leading-[26px] text-primarytwo w-[540px] mx-auto mt-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <CarouselSize />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
