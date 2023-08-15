import React, { useState } from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { Title } from './Text'
import add from "../../assets/svg/add.svg"
import minus from "../../assets/svg/minus.svg"
import Image from 'next/image'
import { faqData } from '../../utils/faqdata'
const Faq = () => {
  return (
    <div className="w-full bg-white h-auto md:py-[100px]" id='faq'>
      <ContainerLayout>
        <div className="w-full flex flex-col">
                  <Title name="Frequently Asked Questions" className='mx-auto' />
                  <div className="flex flex-col md:mt-20">
                      {
                          faqData.map((item: any, index: number) => {
                              return <SingleFaq item={item} key={index} />
                          })
                      }
                  </div>
                  
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Faq


const SingleFaq = ({item} : any) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, story, list,isLast } = item;

    return (
      <div
        className={`flex flex-col  w-full py-5 ${
          isLast ? "border-none" : "border-b border-b-secondary"
        }`}
      >
        <div className="flex space-x-5 items-center" onClick={() => setIsOpen(!isOpen)}>
          <Image src={isOpen ? minus : add} alt="add " />
          <p className="md:text-[22px] text-neutral-700 font-bold sat-bold">
            {title}
          </p>
        </div>
            {isOpen && <div className="flex flex-col mt-3 pl-[44px]">
                <p className='text-neutral-500 md:text-lg '>{story}</p>
                {list.length !== 0  && <ul className='list-disc '>
                    {
                        list.map((item: any, index: number) => {
                            return (
                              <li
                                className="text-neutral-500 md:text-lg"
                                key={index}
                                >
                                    {item}
                              </li>
                            );
                        })
                }
                </ul>}
            </div>}
      </div>
    );
}
