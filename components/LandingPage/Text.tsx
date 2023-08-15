

import Image from "next/image"
import sep from "../../assets/svg/Sep.svg"

interface TextProps {
    name: string;
  className?: string;
  spanText?: string;
}
export const Title = ({ name, spanText, className } : TextProps) => {
    return (
      <div className={`relative    flex ${className} `}>
        <Image src={sep} alt="sep" width={sep.width} height={sep.height} className="absolute hidden md:flex top-0 md:top-[-15px] left-0 md:left-[-40px]" />
            <p className="text-[26px] lg:text-[50px] sat-bold font-bold text-primary text-center mt-5 md:mt-0 ">
          {name} <span className="text-secondary">
              {spanText}
                </span>
        </p>
      </div>
    );
}