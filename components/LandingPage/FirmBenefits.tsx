import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import flawyer from "../../assets/png/ffirm.png";
import lawyerIcon from "../../assets/svg/lawyer-icon.svg";
import { Title } from "./Text";
import Bullet from "./bullet";
const FirmBenefits = () => {
  return (
    <div className="w-full bg-[#fff] bg-opacity-40 py-[51px]">
      <ContainerLayout>
        <div className="w-full flex flex-col 2xl:w-full mx-auto items-center ">
          <div className="w-full flex flex-col-reverse md:flex-row-reverse space-x-4 mt-16">
            <div className="w-full lg:w-5/12 flex  md:flex-row mt-8 md:mt-0 justify-end items-center">
              <Image
                alt="umage"
                src={flawyer}
                width={flawyer.width}
                height={flawyer.height}
              />
            </div>
            <div className="w-full lg:w-7/12 flex flex-col">
              <div className="flex items-start space-x-4 ">
                <Image
                  src={lawyerIcon}
                  alt="icon"
                  width={lawyerIcon.width}
                  height={lawyerIcon.height}
                  className="min-w-[60px] min-h-[60px]"
                />
                <p className=" text-[22px] lg:text-[36px] font-bold sat-bold text-primary leading-normal">
                  For Recruiter, Law Firms, Companies and Individuals
                </p>
              </div>
              <div className="flex flex-col space-y-3 mt-3 pr-3 md:mt-[30px] ">
                <Bullet name="Recruit the best qualified lawyers for your firms, for the roles in your company or for your private individual needs." />
                <Bullet name="With the enabling technologies you can sort out and invite the best candidate based on the available roles in your organization." />
                <Bullet name="Easily pick, schedule and run your interviews on Lawploy, the platform has made it very simple and smooth." />
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default FirmBenefits;
