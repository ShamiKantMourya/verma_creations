import React from 'react';

import { ImageSliderProps } from "../../Utils/imageSlider";

interface DotProps {
  activeIndex: Number;
  onClick: (id: Number | String) => void;
  sliderData: ImageSliderProps[];
}

const Dots: React.FC<DotProps> = ({ activeIndex, onClick, sliderData }) => {
  return (
    <div>
      {sliderData.map((data: ImageSliderProps) => {
        // console.log(data)
        return (

          <div
            key={Number(data.id)}
            className={`${activeIndex === data.id ? "dot active-dot" : "dot"}`}
            onClick={() => onClick(data.id)}
          ></div>
        );
      })}
    </div>
  );
};

export default Dots;