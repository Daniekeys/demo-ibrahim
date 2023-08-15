import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { Title } from './Text';
const Support = () => {
    return (
      <div className="w-full bg-[#CDD2D9] bg-opacity-40 pt-[50px] pb-[87px] " id='contact'>
        <ContainerLayout>
          <div className="w-full flex flex-col items-center">
            <Title name="Support" />
            <div className="mx-auto md:w-10/12 2xl:w-9/12 flex flex-col mt-5">
              <p className="text-neutral-500 text-lg text-center sta-regular">
                We are available 24/7 to answer all your questions and
                complaints.
              </p>
              <p className="text-neutral-500 text-lg text-center sta-regular">
                We are constantly collecting and acting on our users feedback
                regarding additional features and what improvement to make. We
                would be happy to receive your feedback. Send us your feedback
              </p>
            </div>
            {/* Contact Us Form */}
            <div className="lg:w-6/12 mx-auto mt-20">
              <form className="w-full flex flex-col ">
                <label className="sta-light text-lg text-neutral-600 ">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="h-[52px] border-[#cfcfcf] border rounded-[10px] bg-white outline-none text-neutral-700 flex items-center px-3 mb-6"
                />
                <label className="sta-light text-lg text-neutral-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="h-[52px] border-[#cfcfcf] border rounded-[10px] bg-white outline-none text-neutral-700 flex items-center px-3 mb-6"
                />
                <label className="sta-light text-lg text-neutral-600">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="h-[137px] border-[#cfcfcf] border rounded-[10px] bg-white outline-none text-neutral-700 flex items-center px-3 "
                />
                <input type="submit" value="Submit" className='mt-16 mx-auto bg-primary text-white text-base sta-regular h-[52px] w-[358px] flex items-center justify-center rounded-[10px] cursor-pointer  ' />
              </form>
            </div>

            {/* end of contact us */}
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Support
