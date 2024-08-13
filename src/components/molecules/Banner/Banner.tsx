import React, { useState } from 'react';
import './banner.css';

const Banner: React.FC = () => {
    const [isActiveBanner, setActiveBanner] = useState(true);

    const handleBannerClose = () => {
        setActiveBanner(false);
    }

    return (
        <>
            {isActiveBanner && (
                <div className="text-blue-600 font-bold flex items-center justify-between tracking-widest py-1 bg-gray-100 relative">
                    <div className="w-full whitespace-nowrap overflow-hidden">
                        <div className="inline-block animate-scroll">
                            <span>Русскій воєнний корабль, іді нахуй!</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 hover:opacity-70 transition-opacity duration-300"
                        aria-label="Close"
                        onClick={handleBannerClose}
                    >
                        ×
                    </button>
                </div>
            )}
        </>
    );
}

export default Banner;
