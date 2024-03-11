import React, { useState } from 'react';

import SliderContent from './SliderContent';
import { sliderData } from "../../Utils/imageSlider";
import Arrows from './Arrows';
import Dots from './Dots';

const len = sliderData.length - 1;
const Slider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <SliderContent
                activeIndex={activeIndex}
                sliderData={sliderData}
            />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                sliderData={sliderData}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider;