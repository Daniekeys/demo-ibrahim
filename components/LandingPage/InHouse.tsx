import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { CarouselImages } from "./CarouselImage";
import Link from "next/link";
const InHouse = () => {
  return (
    <div className="w-full flex flex-col mt-10 md:mb-20">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center mt-10">
          <h1 className="text-lightPrimary text-[22px] lg:text-[45px] text-center sat-bold font-bold ">
            In-house Recruiters
          </h1>
          <p className="text-neutral-500 text-lg text-center sat-regular mt-4 md:mt-[34px] w-full md:w-10/12 mx-auto">
            Get Matched with our in-house seasoned recruiters to handle your
            recruitment process should you be too occupied to handle the
            recruitment by yourself. Reach us via this link and let’s begin
            right away
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfE3frvzz6rD0GtQCHobgQqJ0fbUpoPmaqcSijX8sXGFcgPmA/viewform?usp=fb_send_twt"  className="bg-primary text-white mx-auto w-[186px] mb-[52px] h-[52px] flex items-center justify-center  text-base font-[500] cursor-pointer mt-6 rounded-[10px]"  target="_blank"
                    rel="noopener noreferrer">
            Let’s recruit for you!
          </Link>
        </div>
      </ContainerLayout>
      {/* carousel session bellow */}
      <div className="w-full">
        <CarouselImages />
      </div>
    </div>
  );
};

export default InHouse;
