
import { sliderData } from "../../Utils/imageSlider";
import Carousel from "./Carousel";


const Slider: React.FC = () => {
    return (
        <div>
            <Carousel
                sliderData={sliderData}
            />
        </div>
    )
}

export default Slider;