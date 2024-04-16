import { motion } from "framer-motion";

import { Carousel } from "./image-slider";
import { images } from "./images";

const ImageSlider = () => {
    return (
        <Carousel className="lg:h-screen mobile:h-[20rem] tab:h-screen" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center mobile:h-80"
            >
                <motion.p className="font-bold text-xl tab:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 flex justify-center items-center">
                    Signage Boards and 3D Wallpaper <br /> manufacturer
                </motion.p>
                <a href="#contact" className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 tab:w-48 tab:h-16 flex justify-center items-center">
                    <span className="flex justify-center items-center tab:text-xl">Contact now →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </a>
            </motion.div>
        </Carousel>
    );
}

export default ImageSlider;