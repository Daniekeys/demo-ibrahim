import {useState} from 'react'
import { DropDown } from '../../assets/svg';
import ReUseModal from './ReuseableModal';
import PrimarySelect from './PrimarySelect';
const fdata = [
  {
    id: "s",
    name: "8480-6 Systolic blood pressure",
  },
  {
    id: "s",
    name: "8480-6 Systolic blood pressure",
  },
  {
    id: "s",
    name: "8480-6 Systolic blood pressure",
  },
];
const SubRow = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [pres, setPres] = useState([0]);
  const [preso, setPreso] = useState([0]);
    return (
      <div className="w-full">
        <div className="w-full flex flex-col border-b border-b-slate-200 border-t border-t-slate-200 pl-5 ">
          <div className="flex w-full   min-h-[42px] ">
            <div className="w-2/12 flex items-center space-x-2   ">
              <span
                className={`w-fit ${
                  open ? "rotate-90" : "rotate-0"
                } cursor-pointer`}
                onClick={() => setOpen(!open)}
              >
                <DropDown />
              </span>
              <p className="text-sm text-[#25213B] font-[500]">Charles Smith</p>
            </div>
            <div className="w-10/12 grid grid-cols-6 pl-5 place-items-center ">
              <div className="w-full">
                <div className="flex space-x-2 items-center  bg-[#FFECCC] text-[#CE8500] text-[12px]  h-[19px] rounded-[10px] w-[58px] justify-center   ">
                  <span className="w-[6px] h-[6px] bg-[#CE8500] rounded-full "></span>
                  <p className="text-xs font-[500px] ">open</p>
                </div>
              </div>
              <div className=" w-full">
                <div className="flex space-x-2 items-center  bg-[#FFECCC] text-[#CE8500] text-[12px]  h-[19px] rounded-[10px] w-[58px] justify-center   ">
                  <span className="w-[6px] h-[6px] bg-[#CE8500] rounded-full "></span>
                  <p className="text-xs font-[500px] ">open</p>
                </div>
              </div>
              <div className=" w-full">
                <div className="flex space-x-2 items-center  bg-[#FFECCC] text-[#CE8500] text-[12px]  h-[19px] rounded-[10px] w-[58px] justify-center   ">
                  <span className="w-[6px] h-[6px] bg-[#CE8500] rounded-full "></span>
                  <p className="text-xs font-[500px] ">open</p>
                </div>
              </div>
              <div className=" w-full"></div>
              <div className=" w-full"></div>
              <div className=" w-full">
                <div className="flex space-x-2 items-center   text-[#009F5C] text-[12px]  h-[19px] rounded-[10px] w-auto px-3 justify-center   ">
                  <span className="w-[6px] h-[6px] bg-[#009F5C] rounded-full "></span>
                  <p className="text-xs font-[500px] ">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="flex flex-col px-6 ">
            <div className="w-full bg-white flex flex-col py-3 px-6  ">
              <div className="py-6 flex space-x-8 items-center ">
                <p className="text-[#0D1A33] font-bold text-sm ">Status:</p>
                <div className="flex space-x-2 items-center  bg-[#FFECCC] text-[#CE8500] text-[12px]  h-[24px] py-3 rounded-[100px] px-[6px] min-w-[72px]   ">
                  <span className="w-[8px] h-[8px] bg-[#CE8500] rounded-full "></span>
                  <p className="text-xs font-[500px] ">open</p>
                </div>
                <p
                  className="p-[6px] rounded-sm bg-[#1677FF] text-sm text-white font-[500] cursor-pointer"
                  onClick={() => setOpenModal(true)}
                >
                  Change Status
                </p>
              </div>
              {/* start of tabs */}
              <div className="w-full mt-8 flex space-x-8 items-center  px-5 border-b border-b-slate-200 ">
                <h1 className="text-[#4A4AFF] text-sm font-medium border-b border-b-[#4A4AFF] h-[48px] flex items-center ">
                  Account History
                </h1>
                <h1 className="text-black text-opacity-80 text-sm font-medium  h-[48px] flex items-center ">
                  Documents
                </h1>
                <h1 className="text-black text-opacity-80 text-sm font-medium  h-[48px] flex items-center ">
                  Notes
                </h1>
              </div>
              {/* end header tabs */}
              {/* start of a combo */}
              <div className="w-full flex flex-col px-5 mt-8 pb-6">
                <div className="flex space-x-4 items-center">
                  <span className="bg-slate-600 w-[5px] h-[5px] rounded-full"></span>
                  <p className=" text-[#0D1A33] font-semibold text-xs">
                    Changes on
                  </p>
                  <p className="text-[#0D1A3399] text-opacity-60 text-xs font-medium">
                    July 04, 2023
                  </p>
                </div>
                <div className="w-1/2 border-b border-b-slate-100 border-l border-l-slate-200 pl-8 flex flex-col pt-8 ">
                  <div className="w-full flex space-x-4 items-center">
                    <span className="w-[5px] h-[5px] rounded-full bg-slate-600" />
                    <p className="text-xs text-[#0D1A33]">Status Changed to</p>

                    <div className="flex space-x-2 items-center bg-[#e1ffea] py-[6px]  text-[#009F5C] text-[12px]  h-[19px] rounded-[10px] w-auto px-3 justify-center   ">
                      <p className="text-xs font-[500px] ">Closed</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 space-x-5 pb-4 ">
                    <div className="bg-[#8F90A6] px-3 py-3 rounded-[36px] text-white text-center text-xs ">
                      GC
                    </div>
                    <p className="text-sm text-[#25213B] font-medium">
                      Glauber Campinho
                    </p>
                  </div>
                </div>
              </div>
              {/* end of a combo */}
              {/* start of a combo */}
              <div className="w-full flex flex-col px-5 mt-8">
                <div className="flex space-x-4 items-center">
                  <span className="bg-slate-600 w-[5px] h-[5px] rounded-full"></span>
                  <p className=" text-[#0D1A33] font-semibold text-xs">
                    Changes on
                  </p>
                  <p className="text-[#0D1A3399] text-opacity-60 text-xs font-medium">
                    July 04, 2023
                  </p>
                </div>
                <div className="w-1/2 border-b border-b-slate-100 border-l border-l-slate-200 pl-8 flex flex-col pt-8 ">
                  <div className="w-full flex space-x-4 items-center">
                    <span className="w-[5px] h-[5px] rounded-full bg-slate-600" />
                    <p className="text-xs text-[#0D1A33]">Status Changed to</p>

                    <div className="flex space-x-2 items-center bg-[#F2F0F9] py-[6px]  text-[#6E6893] text-[12px]  h-[19px] rounded-[10px] w-auto px-3 justify-center   ">
                      <p className="text-xs font-[500px] ">Excluded</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 space-x-5 pb-4 ">
                    <div className="bg-[#8F90A6] px-3 py-3 rounded-[36px] text-white text-center text-xs ">
                      GS
                    </div>
                    <p className="text-sm text-[#25213B] font-medium">
                      Gavin Steward
                    </p>
                  </div>
                </div>
              </div>
              {/* end of a combo */}
              {/* content of tab */}
            </div>
          </div>
        )}
        <ReUseModal open={openModal} setOpen={setOpenModal}>
          <div className="w-full flex flex-col p-6 space-y-6">
            {/* first form */}
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[#25213B] font-semibold mb-3">
                Date of Service
              </label>
              <input
                type="date"
                className="w-full border border-[#8B83BA] px-4 py-[10px] rounded-[4px] "
              />
            </div>
            {/* end pf form */}
            {/* first form */}
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[#25213B] font-semibold mb-3">
                Systolic blood pressure (mmHg)
              </label>
              <input
                type="text"
                className="w-full border border-[#8B83BA] px-4 py-[10px] rounded-[4px] "
              />
            </div>
            {/* end pf form */}

            <PrimarySelect
              data={fdata}
              selected={pres}
              setSelected={setPres}
              label="Systolic blood pressure compliance code (LOINC)"
            />
            {/* first form */}
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[#25213B] font-semibold mb-3">
                Diastolic blood pressure (mmHg)
              </label>
              <input
                type="text"
                className="w-full border border-[#8B83BA] px-4 py-[10px] rounded-[4px] "
              />
            </div>
            <PrimarySelect
              data={fdata}
              selected={pres}
              setSelected={setPres}
              label="Systolic blood pressure compliance code (LOINC)"
            />
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[#25213B] font-semibold mb-3">
                Note
              </label>
              <textarea className="w-full h-28 border border-[#8B83BA] px-4 py-[10px] rounded-[4px] " />
            </div>
            <div className="w-full flex justify-end">
              <p
                className="p-[6px] rounded-sm bg-[#1677FF] text-sm text-white font-[500] cursor-pointer w-fit"
                onClick={() => setOpenModal(false)}
              >
                Change Status
              </p>
            </div>
          </div>
          {/* end pf form */}
        </ReUseModal>
      </div>
    );
}

export default SubRow
