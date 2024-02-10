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
        <figure className='border-2 border-white rounded-md mt-3'>
          <img src={Signage} alt='Signage and Hoardings' className='p-2 rounded-lg' />
          <figcaption className='text-slate-100'>Signage and Hoardings</figcaption>
        </figure>
        <figure className='border-2 border-white rounded-md my-3'>
          <img src={Wallpaper} alt='Customize Wallpaper' className='p-2 rounded-lg' />
          <figcaption className='text-slate-100'>Customize Wallpaper</figcaption>
        </figure>
        <figure className='border-2 border-white rounded-md mb-3'>
          <img src={Repair} alt='Board Repair' className='p-2 rounded-lg' />
          <figcaption className='text-slate-100'>Board Repair</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Services;