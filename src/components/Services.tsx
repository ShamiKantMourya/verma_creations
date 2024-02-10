import React from 'react';

import Signage from "../assets/Signageboard.jpeg";
import Wallpaper from "../assets/wallpaper.jpg";
import Repair from "../assets/repair1.jpg";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col flex-wrap mt-20 h-auto justify-between bg-black'>
      <div>
        <h2 className='text-slate-100 flex justify-center text-xl'>What We Do</h2>
      </div>
      <div>
        <p className='text-slate-100 flex justify-center font-semibold text-4xl'>OUR SERVICES</p>
      </div>
      <div className='flex flex-wrap justify-evenly px-8'>
        <figure className='border-2 border-white rounded-md mt-3 w-auto h-auto object-contain aspect-auto'>
          <img src={Signage} alt='Signage and Hoardings' className=' mobile:hover:z-[-1] p-2 duration-300 ease-in-out scale-100 hover:scale-125' />
          <figcaption className='text-slate-100 flex justify-end text-xl font-medium pr-3 py-3'>Signage and Hoardings</figcaption>
        </figure>
        <figure className='border-2 border-white rounded-md my-3 w-auto h-auto object-contain aspect-auto'>
          <img src={Wallpaper} alt='Customize Wallpaper' className='p-2' />
          <figcaption className='text-slate-100 flex justify-end text-xl font-medium pr-3 py-3 hover:z-[-1]'>Customize Wallpaper</figcaption>
        </figure>
        <figure className='border-2 border-white rounded-md mb-3 w-auto h-auto object-contain aspect-auto'>
          <img src={Repair} alt='Board Repair' className='p-2' />
          <figcaption className='text-slate-100 flex justify-end text-xl font-medium pr-3 py-3 hover:z-[-1]'>Board Repair</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Services;