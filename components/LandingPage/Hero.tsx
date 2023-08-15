import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import google from "../../assets/svg/google-logo.svg"
import apple from "../../assets/svg/apple-logo.svg"
import laugh from "../../assets/png/hero-img.png"
const Hero = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex md:flex-row flex-col md:justify-between mt-32 md:mt-[120px] space-x-6 ">
        <div className="md:w-6/12 flex flex-col">
          <h1 className="sat-bold text-[30px] tracking-[0.45px] md:text-[52px] text-primary font-bold">
            Solution for Employment Troubles in the Legal{" "}
            <span className="text-secondary">Industry</span>{" "}
          </h1>
          <p className="text-[#6D6D6D] text-base sat-regular mt-5 md:mt-[10px]">
            With enabling technologies Lawploy is a cutting edge Job marketplace
            for legal practitioners and employers.
          </p>
          <div className="flex items-center space-x-4  mt-[22px]">
            <Image
              src={apple}
              width={apple.width}
              height={apple.height}
              alt="apple"
            />
            <Image
              src={google}
              width={google.width}
              height={google.height}
              alt="google"
            />
          </div>
        </div>
        <div className="w-full md:w-6/12 mt-8 md:mt-0">
          <Image src={laugh} alt="lah" className="w-full h-auto" />
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Hero
