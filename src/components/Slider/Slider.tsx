
import { sliderData } from "../../Utils/imageSlider";
import Carousel from "./Carousel";


const Slider: React.FC = () => {
    return (
        <div>
            <Carousel
                sliderData={sliderData}
                autoSlide = {true}
                autoSlideInterval={2000}
            />
        </div>
    )
}

export default Slider;