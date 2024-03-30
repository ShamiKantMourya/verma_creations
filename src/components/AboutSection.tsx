import React from 'react';
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../Utils/cn";

interface AboutProps {
    words: string;
    className?: string;
};

const AboutSection: React.FC<AboutProps> = ({ words, className }) => {

    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);
    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-white opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div className='mt-20 px-24 pb-8'>
            <h1 className='text-white font-bold text-3xl flex justify-center'>About Us</h1>
            <div>
                <div className={cn(className)}>
                    <div className='text-white'>
                        <h3 className=''>Welcome to Verma Creations, your premier destination for top-quality signage boards, customized wallpaper, flex printing, hoardings, and mesmerizing neon texts and logos. At Verma Creations, we blend innovation with craftsmanship to bring your vision to life, enhancing your brand identity and leaving a lasting impression.

                            With years of experience in the industry, Verma Creations has established itself as atrusted name synonymous with excellence. Our team of skilled artisans and designers arepassionate about delivering stunning creations that exceed expectations.</h3>
                        <h2 className='text-white font-bold text-xl py-2'>Why Choose Verma Creations?</h2>
                        <ul className='text-white'>
                            <li><span className='font-bold text-md'>Unparalleled Creativity:</span>We understand the power of visual communication. Our creative experts employ cutting-edge techniques to craft signage boards, wallpapers, flex prints, hoardings, and neon creations that captivate your audience.</li>
                            <li><span className='font-bold text-md'>Customization at Its Best:</span>Your brand is unique, and so should be your signage. We offer tailor-made solutions to match your specific requirements, ensuring that every piece reflects your brand's personality and message.</li>
                            <li><span className='font-bold text-md'>Premium Quality:</span> Quality is non-negotiable at Verma Creations. We use only the finest materials and employ stringent quality control measures to deliver products that stand the test of time, maintaining their allure for years to come.</li>
                            <li><span className='font-bold text-md'>Client-Centric Approach:</span> Your satisfaction is our priority. We believe in building long-lasting relationships with our clients by providing exceptional service, prompt delivery, and a hassle-free experience from start to finish.</li>
                            <li><span className='font-bold'>Innovative Solutions:</span>Stay ahead of the curve with our innovative solutions. Whether you're looking for a striking neon logo or eye-catching hoarding, we've got you covered with the latest trends and technologies.</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h1 className='text-white font-bold text-xl py-2'>Let's Create Together</h1>
                        <div className=" text-white text-md leading-snug tracking-wide">
                            {renderWords()}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;