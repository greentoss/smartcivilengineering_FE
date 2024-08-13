import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images directly
import sliderImage1 from "@/assets/images/slider-4.jpg";
import sliderImage2 from "@/assets/images/slider-5.jpg";
import sliderImage3 from "@/assets/images/slider-6.jpg";
import { MainCarouselHeading } from '../../molecules';


const MainCarousel: React.FC = () => {

    // Array of slides
    const slides = [
        { id: 1, src: sliderImage1, alt: "First slide" },
        { id: 2, src: sliderImage2, alt: "Second slide" },
        { id: 3, src: sliderImage3, alt: "Third slide" }
    ];
    
    const SLIDE_SPEED = 1000; //speed in ms
    const SLIDE_FREQUENCY = 5000; //frequency in ms
    
// Function to handle rendering of arrows
const renderArrow = (direction: 'prev' | 'next') => {



    return (onClickHandler: () => void, hasPrevOrNext: boolean, label: string) => {
        if (!hasPrevOrNext) return null;

        const positionClass = direction === 'prev' ? 'left-0' : 'right-0';
        const iconPath = direction === 'prev' 
            ? "M15 19l-7-7 7-7" 
            : "M9 5l7 7-7 7";

        return (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`absolute top-1/2 ${positionClass} transform -translate-y-1/2 p-4 bg-black bg-opacity-50 text-white hover:bg-opacity-70 z-10`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                </svg>
                <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
            </button>
        );
    };
};

    return (
        <div className="relative w-full overflow-hidden">
            <Carousel
                showArrows={true} // Show navigation arrows
                autoPlay={true} // Automatically play the slides
                infiniteLoop={true} // Loop the slides infinitely
                showThumbs={false} // Hide thumbnail indicators
                showStatus={false} // Hide the status indicator (current slide out of total)
                showIndicators={false} // Hide the dots at the bottom
                interval={SLIDE_FREQUENCY} // Frequency: How long each slide stays before moving to the next (5 seconds)
                transitionTime={SLIDE_SPEED} // Speed: How fast the transition between slides occurs (1 seconds)
                renderArrowPrev={renderArrow('prev')}
                renderArrowNext={renderArrow('next')}
            >
                {slides.map(slide => (
                    <div key={slide.id} className="max-h-[55vw] w-full">
                        <img className="w-full h-auto object-cover" src={slide.src} alt={slide.alt} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <MainCarouselHeading />
                        </div>
                        {/* TODO: make it ober the carusel not on every slide */}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default MainCarousel;
