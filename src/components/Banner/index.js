import './banner.css';
import {useState} from "react";

function HeaderMain() {
    const [isActiveBanner, setActiveBanner] = useState('banner-active');

    let handleBannerClose = () => {
        setActiveBanner('banner-notActive');
    }

    return (
        <>
            <div className={`banner ${isActiveBanner}`}>
                <div className='banner-box'>
                    <span className='banner-text'>Русскій воєнний корабль, іді нахуй!</span>
                    <button type="button" className="btn-close btn-close-white banner-btn-close align-self-start" aria-label="Close"
                        onClick={handleBannerClose}
                    />
                </div>
            </div>
        </>
    );
}

export default HeaderMain;
