import React from 'react'
import { Title } from './Text'
import Image from 'next/image';
import otherB from "../../assets/png/otherB.png"
import yellow from "../../assets/svg/yellow-circular.svg";
import blue from "../../assets/svg/blue-circular.svg"
import ContainerLayout from '../../Layouts/ContainerLayout';
const OtherBenefits = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-white flex flex-col items-center text-baseemd:nter lg:my-20 ">
      

      <Title name="Other Amazing Benefits of Using " spanText="Lawploy" className='' />
      
      <div className="w-full mt-[60px] flex flex-col md:flex-row md:items-center space-x-10 ">
        <div className="w-full md:w-1/2">
          <Image src={otherB} alt="otherb" className="w-full h-auto " />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 2xl:pr-[122px] mt-[30px]">
          {/* start of a sessiom */}
          <div className="w-11/12 2xl:w-8/12 flex space-x-2 items-start">
            <Image
              src={blue}
              alt="sdhsjd"
              className="min-w-[40px] md:min-w-[74px] min-h-[74px]"
            />
            <p className="text-neutral-500 sta-regular text-base md:text-lg">
              Get notified when selected for interviews and begin your interview
              preparation right away.
            </p>
          </div>
          {/* end of a session */}
          {/* start of a sessiom */}
          <div className="w-11/12 flex space-x-2 items-start">
            <Image
              src={yellow}
              alt="sdhsjd"
              className="min-w-[40px] md:min-w-[74px] min-h-[74px]"
            />
            <p className="text-neutral-500 sta-regular text-base md:text-lg">
              Get feedback upon completion of your interview with recruiters to
              help you make self improvements
            </p>
          </div>
          {/* end of a session */}
          {/* start of a sessiom */}
          <div className="w-11/12 flex space-x-2 items-start">
            <Image
              src={blue}
              alt="sdhsjd"
              className="min-w-[40px] md:min-w-[74px] min-h-[74px]"
            />
            <p className="text-neutral-500 sta-regular text-base md:text-lg">
              Get your reference letters ready to be viewed from your previous
              employers.
            </p>
          </div>
          {/* end of a session */}
          {/* start of a sessiom */}
          <div className="w-11/12 flex space-x-2 items-start">
            <Image
              src={yellow}
              alt="sdhsjd"
              className="min-w-[40px] md:min-w-[74px] min-h-[74px]"
            />
            <p className="text-neutral-500 sta-regular text-base md:text-lg">
              View the lists of open job via tje job feed and send application
            </p>
          </div>
          {/* end of a session */}
        </div>
      </div>
    </div>
  );
}

export default OtherBenefits
