import React from 'react'
import Image from 'next/image';
import useA from "../../assets/png/use1.png"
import useB from "../../assets/png/use2.png"
import useC from "../../assets/png/use3.png"
import useD from "../../assets/png/use4.png"
import useE from "../../assets/png/use5.png"
import useF from "../../assets/png/use6.png"
import useG from "../../assets/png/use7.png"
import useH from "../../assets/png/use8.png"

const CarouselImage = () => {
  return (
      <div className="w-full max-w-[1440px] mx-auto bg-white flex flex-col items-center overflow-y-hidden  ">
          <div className="w-full flow-hide-x relative overflow-y-hidden">
              <div className='w-full h-[100px] md:h-[185px] rounded-[50%] absolute bg-white top-[-70px] md:top-[-100px]' />
              <div className="flex flex-row gap-x-4 md:gap-x-12 flow-hide-x">
                  <Image src={useA} alt="alt" width={useA.width} height={useA.height} className='min-w-[170px] md:min-w-[400px] ' />
                  <Image src={useB} alt="alt" width={useB.width} height={useB.height} className='min-w-[170px] md:min-w-[400px] ' />
                  <Image src={useC} alt="alt" width={useC.width} height={useC.height} className='min-w-[170px] md:min-w-[400px] ' />
                  <Image src={useD} alt="alt" width={useD.width} height={useD.height} className='min-w-[170px] md:min-w-[400px] ' />
                  <Image src={useE} alt="alt" width={useE.width} height={useE.height} className='min-w-[170px] md:min-w-[400px] ' />
              </div>
              <div className='w-[full] h-[100px] md:h-[185px] rounded-[50%] absolute  left-0 right-0 bottom-[-70px] md:bottom-[-100px] bg-white' />
                  
          </div>
    </div>
  );
}

export default CarouselImage


export  const CarouselImages = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white flex flex-col items-center overflow-y-hidden  ">
      <div className="w-full flow-hide-x relative overflow-y-hidden">
        <div className="w-full h-[100px] md:h-[185px] rounded-[50%] absolute bg-white top-[-70px] md:top-[-100px]" />
        <div className="flex flex-row gap-x-4 md:gap-x-12 flow-hide-x">
          <Image
            src={useF}
            alt="alt"
            width={useC.width}
            height={useC.height}
            className="min-w-[170px] md:min-w-[400px] "
          />
          <Image
            src={useG}
            alt="alt"
            width={useD.width}
            height={useD.height}
            className="min-w-[170px] md:min-w-[400px] "
          />
          <Image
            src={useH}
            alt="alt"
            width={useE.width}
            height={useE.height}
            className="min-w-[170px] md:min-w-[400px] "
          />
          <Image
            src={useA}
            alt="alt"
            width={useA.width}
            height={useA.height}
            className="min-w-[170px] md:min-w-[400px] "
          />
          <Image
            src={useB}
            alt="alt"
            width={useB.width}
            height={useB.height}
            className="min-w-[170px] md:min-w-[400px] "
          />
        </div>
        <div className="w-[full] h-[100px] md:h-[185px] rounded-[50%] absolute  left-0 right-0 bottom-[-70px] md:bottom-[-100px] bg-white" />
      </div>
    </div>
  );
};
