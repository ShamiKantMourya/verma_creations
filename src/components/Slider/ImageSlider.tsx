"use client";
import { motion } from "framer-motion";

import { Carousel } from "./image-slider";
import { images } from "./images";

function ImageSlider() {
    return (
        <Carousel className="lg:h-[40rem] mobile:h-[20rem]" images={images}>
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
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Signage Boards and 3D Wallpaper <br /> manufacturer
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>Contact now →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </Carousel>
    );
}

export default ImageSlider;