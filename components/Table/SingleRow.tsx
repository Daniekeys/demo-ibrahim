import React,{useState} from 'react'
import { DropDown,Dots } from '../../assets/svg';
import SubRow from './SubRow';
const testo = [1,2,3,4]
const SingleRow = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-5 min-h-[42px] pt-6 bg-white">
        <div className="flex items-center space-x-4">
          <span
            className={`w-fit ${
              open ? "rotate-90" : "rotate-0"
            } cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            <DropDown />
          </span>
          <p className="text-sm text-[#25213B] font-bold ">Dr. Janet Swift</p>
        </div>
        <div className="flex items-center">
          <p className="text-[11px] text-[#25213B] font-semibold uppercase">
            20
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-[11px] text-[#25213B] font-semibold uppercase">
            20
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-[11px] text-[#25213B] font-semibold uppercase">
            20
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-[#25213B] font-semibold uppercase">
            20
          </p>
          <Dots />
        </div>
      </div>
      {open && (
        <div className="w-full flex flex-col mt-3">
          {/* semi header */}
          <div className="w-full flex flex-col border-b border-b-slate-200 border-t border-t-slate-200  ">
            <div className="flex w-full   min-h-[48px] ">
              <div className="w-2/12 flex items-center justify-center   ">
                <p className="text-[10px] text-[#25213B] font-semibold uppercase text-center">
                  Name
                </p>
              </div>
              <div className="w-10/12 grid grid-cols-6 pl-5 place-items-center ">
                <div className="w-full">
                  <p className="text-[10px] text-[#25213B] font-semibold uppercase  p-0">
                    {`HbA1c (>9%)`}
                  </p>
                </div>
                <div className=" w-full">
                  <p className="text-[10px] text-[#25213B] font-semibold uppercase">
                    {`Screening - depression 
& follow-up plan`}
                  </p>
                </div>
                <div className=" w-full">
                  <p className="text-[10px] text-[#25213B] font-semibold uppercase">
                    {`Controlling
 High BP`}
                  </p>
                </div>
                <div className=" w-full">
                  <p className="text-[10px] text-[#25213B] font-semibold uppercase">
                    {`Breast Cancer 
Screening`}
                  </p>
                </div>
                <div className=" w-full">
                  <p className="text-[10px] text-[#25213B] font-semibold uppercase">
                    {`Cervical Cancer Screening`}
                  </p>
                </div>
                <div className=" w-full">
                  <p className="text-[10px] text-[#25213B] font-semibold uppercase">
                    {`Colorectal Cancer Screening`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {
            testo?.map((item: any, index: number) => {
              return (
                <SubRow key={index} />
              )
            })
          }
          
        </div>
      )}
    </div>
  );
}

export default SingleRow
