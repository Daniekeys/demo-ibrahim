import {useState} from 'react'
import { Title } from './Text'
import Image from 'next/image';
import TestA from "../../assets/png/test1.png"
import TestB from "../../assets/png/test2.png"
import TestC from "../../assets/png/test3.png"
const Testimonial = () => {
  const [present, setPresent] = useState(1);
  return (
    <div className="w-full flex flex-col bg-white mt-[75px] items-center mb-20">
      <Title name="What Client Say About Us" />
      {/* testimonials */}
      <div className="mt-[58px] w-full 2xl:max-w-[1600px] mx-auto flex  flex-col md:flex-row ">
        <div className=" w-full md:w-1/2">
          {present === 1 && (
            <Image alt="hsdjs" src={TestA} className="w-full h-auto" />
          )}
          {present === 2 && (
            <Image alt="hsdjs" src={TestB} className="w-full h-auto" />
          )}
          {present === 3 && (
            <Image alt="hsdjs" src={TestC} className="w-full h-auto" />
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col bg-deepBlue h-inherit">
          {/* start of comments */}
          {present === 1 && (
            <div className="lg:w-8/12 mx-auto flex flex-col mt-[96px]">
              <h1 className="text-white sta-bold text-xl md:text-[30px] text-center">
                “Lawploy is a game changer for me. When it comes to recruiting
                qualified Lawyers I use Lawploy to easily achieve that.”
              </h1>
              <p className="text-center text-white text-xl sta-regular mt-[60px] ">
                Ayeni Daniel
              </p>
              <p className="text-[#afafaf] text-base mt-1 sta-light text-center">
                Recruiter
              </p>

              <div className="flex justify-center items-center space-x-[11px] mt-[46px] pb-4">
                <div
                  className="w-[15px] h-[15px] rounded-full bg-white cursor-pointer"
                  onClick={() => setPresent(1)}
                />
                <div
                  className="w-[10px] h-[10px] rounded-full bg-[#868686] cursor-pointer"
                  onClick={() => setPresent(2)}
                />
                <div
                  className="w-[10px] h-[10px] rounded-full bg-[#868686] cursor-pointer"
                  onClick={() => setPresent(3)}
                />
              </div>
            </div>
          )}

          {/* end of a present */}
          {/* start of comments */}
          {present === 2 && (
            <div className="lg:w-8/12 mx-auto flex flex-col mt-[96px]">
              <h1 className="text-white sta-bold text-xl md:text-[30px] text-center">
                “I can confirm that with Lawploy my cases cannot be striked out
                again for absence as I now use Lawploy to easily get experienced
                colleagues to hold my briefs. This has actually cut down my firm
                expenses on transportation, hotel accommodations etc and my
                briefs no longer suffer setback. ”
              </h1>
              <p className="text-center text-white text-xl sta-regular mt-[30px] ">
                Annie Martins
              </p> 
              <p className="text-[#afafaf] text-base mt-1 sta-light text-center">
                Principal Partner
              </p>

              <div className="flex justify-center items-center space-x-[11px] mt-[46px] pb-4">
                <div
                  className="w-[10px] h-[10px] rounded-full bg-[#868686] cursor-pointer"
                  onClick={() => setPresent(1)}
                />
                <div
                  className="w-[15px] h-[15px] rounded-full bg-white cursor-pointer"
                  onClick={() => setPresent(2)}
                />
                <div
                  className="w-[10px] h-[10px] rounded-full bg-[#868686] cursor-pointer"
                  onClick={() => setPresent(3)}
                />
              </div>
            </div>
          )}

          {/* end of a present */}
          {/* start of comments */}
          {present === 3 && (
            <div className="lg:w-8/12 mx-auto flex flex-col mt-[96px]">
              <h1 className="text-white sta-bold text-xl md:text-[30px] text-center">
                “Since I started using lawploy to recruit Lawyers I have found
                the platform very helpful, it's very easy to select Lawyers in
                the field that I need Lawyer for, schedule interviews and pick
                the best and at same time easily give feedback to all. It's so
                great”
              </h1>
              <p className="text-center text-white text-xl sta-regular mt-[30px] ">
                Ajayi Precious
              </p>
              <p className="text-[#afafaf] text-base mt-1 sta-light text-center">
                Recruiter
              </p>

              <div className="flex justify-center items-center space-x-[11px] mt-[46px] pb-4">
                <div
                  className="w-[10px] h-[10px] rounded-full bg-[#868686] cursor-pointer"
                  onClick={() => setPresent(1)}
                />
                <div
                  className="w-[10px] h-[10px] rounded-full bg-[#868686] cursor-pointer"
                  onClick={() => setPresent(2)}
                />
                <div
                  className="w-[15px] h-[15px] rounded-full bg-white cursor-pointer"
                  onClick={() => setPresent(3)}
                />
              </div>
            </div>
          )}

          {/* end of a present */}
        </div>
      </div>
    </div>
  );
}

export default Testimonial
