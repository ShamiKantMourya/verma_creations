import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

import { ImageSliderProps } from "../../Utils/imageSlider";

interface CarouselProps {
    sliderData: ImageSliderProps[];
    autoSlide: boolean;
    autoSlideInterval: number;
}

const Carousel: React.FC<CarouselProps> = ({ sliderData, autoSlide, autoSlideInterval }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? sliderData.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === sliderData.length - 1 ? 0 : curr + 1));


    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, []);
    return (
        <div className='lg:h-screen z-10'>
            <div className='h-80 w-full overflow-hidden relative lg:h-full'>
                {
                    sliderData.map((data) => (
                        <div key={data.id} className='flex items-center transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                            <div className='bg-blue-950 h-80 w-full absolute top-0 opacity-50 lg:h-full'></div>
                            <img src={data.urls} className='h-80 w-full lg:h-screen' alt={data.alt} />
                            <div className='absolute px-10'>
                                <h2 className='text-white text-4xl font-medium'>{data.title}</h2>
                                <h3 className='text-white text-2xl py-2'>{data.description}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-2 h-80 lg:h-screen mobile:mt-20 mobile:z-20'>
                <button onClick={prev} className='text-white'>
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className='text-white'>
                    <ChevronRight size={40} />
                </button>
            </div>
            <div className='absolute lg:bottom-8 left-1/2 -translate-x-2/4 z-0 mobile:mt-20 mobile:top-72 lg:translate-y-64'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        sliderData.map((data) => (
                            <div key={data.id} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === data.id ? "p-2" : "bg-opacity-50"}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;