import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import flawyer from "../../assets/png/flawyers.png"
import lawyerIcon from "../../assets/svg/lawyer-icon.svg"
import { Title } from './Text'
import Bullet from './bullet'
const LawyerBenefits = () => {
    return (
      <div className="w-full bg-[#CDD2D9] bg-opacity-40 py-[51px] h-full">
        <ContainerLayout>
          <div className="w-full flex flex-col 2xl:w-11/12 mx-auto items-center ">
            <Title
              name="Lawploy has made it completely seamless"
              className="hidden md:flex"
            />
            <p className="text-[26px] md:text-[50px] sat-bold font-bold text-primary hidden md:flex ">
              to do the <span className="text-secondary">following</span>
            </p>
            <div className="w-full flex justify-center md:hidden">
              <Title
                name="Lawploy has made it completely seamless to do the "
                spanText="following"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col-reverse space-x-4 mt-12">
              <div className="w-full md:w-5/12 flex justify-center items-center ">
                <Image
                  alt="umage"
                  src={flawyer}
                  width={flawyer.width}
                  height={flawyer.height}
                />
              </div>
              <div className="w-full md:w-7/12 flex flex-col">
                <div className="flex items-center space-x-4">
                  <Image
                    src={lawyerIcon}
                    alt="icon"
                    width={lawyerIcon.width}
                    height={lawyerIcon.height}
                  />
                  <p className=" text-[22px] lg:text-[36px] font-bold sat-bold text-primary">
                    For Lawyers
                  </p>
                </div>
                <div className="flex flex-col space-y-3 mt-3 md:mt-[30px] pr-3 ">
                  <Bullet name="Engage your colleagues in other jurisdictions to handle your brief in that jurisdiction" />
                  <Bullet name="Engage colleagues law office for services of legal process." />
                  <Bullet name="Engage the best of the best to hold your brief in that other jurisdiction for court proceedings Alternative Dispute Resolution (ADR) proceedings, Contract Negotiations, Representations and so much more thereby eliminating the cost of transportations to and fro, hotel accommodations, stress and other expenses." />
                </div>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default LawyerBenefits
