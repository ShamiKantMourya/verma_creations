import React from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

import { ImageSliderProps } from "../../Utils/imageSlider";

interface CarouselProps {
    sliderData: ImageSliderProps[];
}

const Carousel: React.FC<CarouselProps> = ({ sliderData }) => {
    return (
        <>
                <div className='h-80 overflow-hidden relative'>
                {
                    sliderData.map((data) => (
                        <div key={data.id} className='flex justify-center items-center z-0'>
                            <img src={data.urls} className='h-80 w-full' alt={data.alt} loading='lazy' />
                            <div className='absolute left-0'>
                                <h2 className='text-white text-4xl text-bo'>{data.title}</h2>
                                <h3 className='text-white'>{data.description}</h3>
                            </div>
                        </div>
                    ))
                }
                </div>
            <div className='absolute inset-0 flex items-center justify-between p-4 h-80 mt-20'>
                <button className='text-white'>
                    <ChevronLeft size={40}/>
                </button>
                <button className='text-white'>
                    <ChevronRight size={40}/>
                </button>
            </div>
        </>
    )
}

export default Carousel;