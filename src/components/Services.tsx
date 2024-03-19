import React from 'react';

import Signage from "../assets/Signageboard.jpeg";
import Wallpaper from "../assets/wallpaper.jpg";
import Repair from "../assets/repair1.jpg";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col flex-wrap mt-10 lg:h-screen justify-evenly'>
      <div>
        <h2 className='text-slate-100 flex justify-center text-xl py-8'>What We Do</h2>
      </div>
      <div>
        <p className='bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent flex justify-center font-bold text-4xl mb-5'>OUR SERVICES</p>
      </div>
      <div className='flex flex-wrap justify-evenly items-center px-8 w-full mobile:my-6'>
        <figure className='border-2 border-white rounded-md h-96 cursor-pointer w-80 flex justify-around flex-col'>
          <img src={Signage} alt='Signage and Hoardings' className='p-2 w-full h-80' />
          <figcaption className='text-slate-100 flex justify-end text-xl font-medium pr-3 py-3'>Signage and Hoardings</figcaption>
        </figure>
        <figure className='border-2 border-white rounded-md mobile:my-6 w-80 h-96 cursor-pointer flex justify-around flex-col'>
          <img src={Wallpaper} alt='Customize Wallpaper' className='p-2 h-80' />
          <figcaption className='text-slate-100 flex justify-end text-xl font-immedium pr-3 py-3 '>Customize Wallpaper</figcaption>
        </figure>
        <figure className='border-2 border-white rounded-md w-80 h-96 cursor-pointer flex justify-around flex-col'>
          <img src={Repair} alt='Board Repair' className='p-2 h-80' />
          <figcaption className='text-slate-100 flex justify-end text-xl font-medium pr-3 py-3'>Board Repair</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Services;