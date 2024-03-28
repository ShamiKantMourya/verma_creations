import React from 'react';

import { DirectionAwareHover } from "./ui/image-hover";
import { sliderData } from "./Slider/images";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col justify-center h-auto w-full z-0 my-6'>
      <div>
        <h2 className='text-slate-100 flex justify-center text-xl py-8'>What We Do</h2>
      </div>
      <div>
        <p className='bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent flex justify-center font-bold text-4xl mb-5'>OUR SERVICES</p>
      </div>
      <div className="h-auto relative  flex items-center justify-evenly flex-wrap mobile:px-6">
        {
          sliderData.map((data) => (
            <DirectionAwareHover imageUrl={data.urls} alt={data.alt} key={data.id}>
              <p className="font-bold text-xl">{data.title}</p>
              <p className="font-normal text-sm pr-5">{data.description}</p>
            </DirectionAwareHover>
          ))
        }
      </div>
    </div>
  )
}

export default Services;