import React from 'react'
import SingleRow from './SingleRow';

const plays = [1, 2, 3, 4];
const MainTable = () => {
  return (
    <div className="w-full flex flex-col  mt-12 bg-[#F2F4F5]  ">
      <div className="w-full flex flex-col">
        {/* header */}
        <div className="w-full grid grid-cols-5 bg-[#F2F4F5] min-h-[42px] ">
          <div className="flex items-center"></div>
          <div className="flex items-center">
            <p className="text-[10px] text-[#25213B] font-semibold uppercase">
              eligible patients
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[10px] text-[#25213B] font-semibold uppercase">
              compliant (gap closed)
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[10px] text-[#25213B] font-semibold uppercase">
              non compliant (gap open)
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[10px] text-[#25213B] font-semibold uppercase">
              additional gaps needed
            </p>
          </div>
        </div>
        {plays?.map((item: any, index: number) => {
          return <SingleRow key={index} />;
        })}
      </div>
    </div>
  );
}

export default MainTable
