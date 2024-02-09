import React from 'react';

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
        <div>
          <img src='' alt='Signage and Hoardings' />
          <div>
            <h1>Signage and Hoardings</h1>
          </div>
        </div>
        <div>
          <img src='' alt='Customize Wallpaper' />
          <div>
            <h1>Customize Wallpaper</h1>
          </div>
        </div>
        <div>
          <img src='' alt='Board Repair' />
          <div>
            <h1>Board Repair</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;