import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import CarouselImage from './CarouselImage';
const About = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-20">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center mt-10">
          <h1 className="text-lightPrimary text-[26px]  lg:text-[45px] text-center sat-bold font-bold ">
            Lawploy
          </h1>
          <p className="text-neutral-500 text-lg text-center sat-regular mt-5 md:mt-[34px] w-full md:w-10/12 mx-auto">
            Lawploy is a cutting edge job marketplace for lawyers and companies,
            law firms individuals seeking to employ legal practitioners for
            contract, part-time, full-time or freelance and for colleagues’
            brief holding. With enabling technologies, Lawploy is
            revolutionizing job market for legal practitioners and employers.
            With 100 percent focus on ease of recruitment of lawyers for your
            company or individual needs.
          </p>
        </div>
      </ContainerLayout>
      {/* carousel session bellow */}
      <div className='w-full'>
        <CarouselImage />
      </div>
    </div>
  );
}

export default About
