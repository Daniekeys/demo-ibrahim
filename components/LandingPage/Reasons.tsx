import React from "react";
import { Title } from "./Text";
import Image from "next/image";
import otherB from "../../assets/png/otherB.png";
import smile from "../../assets/png/smile-woman.png"
import { YellowBullet } from "./bullet";
const Reasons = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-white flex flex-col items-center lg:my-20" id="feature">
      <Title name="Reasons why you should sign up on  " spanText="Lawploy" />
      <div className="w-full mt-[60px] lg:flex-row-reverse flex-col flex items-center space-x-10 ">
        <div className="w-full md:w-1/2 ">
          <Image src={smile} alt="otherb" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 2xl:pl-[122px] mt-[30px] md:mt-0">
          <YellowBullet name="Lawploy is for all for free." />
          <YellowBullet name="Lawyers that are qualified and called to practice law in their jurisdictions." />
          <YellowBullet
            name="Companies/businesses in need of lawyers for employment. 
"
          />
          <YellowBullet name="Law firms in need of legal associates, junior to principal and interns." />
          <YellowBullet
            name="Lawploy has the solution for your every day troubles of sourcing and employing qualified lawyers for your companies, firms or individual private need.
"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Reasons;
