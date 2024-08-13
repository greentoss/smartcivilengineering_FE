import React from 'react';

const MainCarouselHeading: React.FC = () => {
    return (
        <div className="text-center text-white flex flex-col items-center justify-center">
            <h2 className="text-[5vw] font-bold mb-4 text-shadow-lg">
                We will rebuild our country!
            </h2>
            <p className="relative top-[5vw] text-[2vw] font-bold text-shadow-md">
                We propose YOU: <br /> 
                consultations about damaged constructions, <br /> 
                rebuilding and reconstruction of injured infrastructure
            </p>
        </div>
    );
}

export default MainCarouselHeading;
