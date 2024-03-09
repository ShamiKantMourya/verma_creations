import React from 'react';

interface ArrowProps {
    prevSlide: () => void;
    nextSlide: () => void;
}
const Arrows: React.FC<ArrowProps> = ({ prevSlide, nextSlide }) => {
    return (
        <div>
            <span className='' onClick={prevSlide}>&#10094;</span>
            <span className='' onClick={nextSlide}>&#10095;</span>
        </div>
    )
}

export default Arrows;