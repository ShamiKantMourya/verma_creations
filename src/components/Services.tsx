import React from 'react';

import Signage from "../assets/Signageboard.jpeg";
import Wallpaper from "../assets/wallpaper.jpg";
import Repair from "../assets/repair1.jpg";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col flex-wrap mt-20 h-auto justify-between bg-black'>
      <div>
        <h2>What We Do</h2>
      </div>
      <div>
        <h1>OUR SERVICES</h1>
      </div>
      <div>
        <figure>
          <img src={Signage} alt='Signage and Hoardings' />
          <figcaption>Signage and Hoardings</figcaption>
        </figure>
        <figure>
          <img src={Wallpaper} alt='Customize Wallpaper' />
          <figcaption>Customize Wallpaper</figcaption>
        </figure>
        <figure>
          <img src={Repair} alt='Board Repair' />
          <figcaption>Board Repair</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Services;