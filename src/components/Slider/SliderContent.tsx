import React from 'react';
import {ImageSliderProps} from "../../Utils/imageSlider";
// import Dots from './Dots';

interface SliderProps {
  activeIndex: Number;
  sliderData: ImageSliderProps[];
};

const SliderContent: React.FC<SliderProps> = ({activeIndex, sliderData}) => {
  return (
    <section>
      {
        sliderData.map((data:ImageSliderProps) => (
          <div key={Number(data.id)} className={data.id === activeIndex ? "slides active" : "inactive"}>
            <img src={String(data.urls)} alt={String(data.alt)}/>
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>
          </div>
        ))
      }
    </section>
  )
}

export default SliderContent;