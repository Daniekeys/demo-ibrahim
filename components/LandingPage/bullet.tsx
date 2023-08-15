import React from 'react'

const Bullet = ({name} : any) => {
  return (
    <div className='flex items-baseline space-x-[12px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-deepBlue min-w-[11px] min-h-[11px]'></div>
          <p className='text-neutral-500 text-base md:text-lg sta-regular font-[500]'>
              {name}
          </p>
          
    </div>
  )
}

export default Bullet

export const YellowBullet = ({ name }: any) => {
  return (
    <div className="flex items-baseline space-x-[12px]">
      <div className="w-[11px] h-[11px] rounded-full bg-secondary min-w-[11px] min-h-[11px]"></div>
      <p className="text-neutral-500 text-base md:text-lg sta-regular font-[500]">{name}</p>
    </div>
  );
};
