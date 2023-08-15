import React,{useState} from 'react'
import logo from "../../assets/svg/logo.svg"
import Image from 'next/image';
import Link from 'next/link';
import bars from "../../assets/svg/bars.svg"
import close from "../../assets/svg/close.svg"
import { useRouter } from 'next/router';
const styles = {
    active: "",
    nonactive : ""
}
const MobileNav = ({present} : any ) => {
    const [show, setShow] = useState(false);
    const router = useRouter();
    return (
      <div>
        <div className="w-full bg-white pt-4 fixed top-0 nav-index  left-0 right-0 flex flex-col md:hidden overflow-x-hidden">
          <div className="w-full flex items-center justify-between px-4 h-[65px]">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>

            <div className="w-fit" onClick={() => setShow(!show)}>
              <Image src={show ? close : bars} alt="bars" className="w-[24px]" />
            </div>
          </div>

          {show && (
            <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-[90vh] ">
              <div className="flex flex-col w-full px-4 mt-[45px]">
                <div className="w-full py-6 border-b border-b-[#ABB3BF]" onClick={() => setShow(false)}>
                  <Link href="#feature" className="text-primary text-base font-[500]">
                    Features
                  </Link>
                </div>
                <div className="w-full py-6 border-b border-b-[#ABB3BF]" onClick={() => setShow(false)}>
                  <Link href="#faq" className="text-primary text-base font-[500]">
                    FAQs
                  </Link>
                </div>
                <div className="w-full py-6 border-b border-b-[#ABB3BF]" onClick={() => setShow(false)}>
                  <Link href="#contact" className="text-primary text-base font-[500]">
                    Contact Us
                  </Link>
                </div>
                <div className="flex flex-col mt-[160px] space-y-5">
                  <button className='w-full flex justify-center items-center h-[52px] rounded-[10px] text-white bg-primary'>
                    Create Account
                  </button>
                  <button className='w-full flex justify-center items-center h-[52px] rounded-[10px] text-primary border-[2px] font-bold border-primary '>
                    Log in
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default MobileNav
