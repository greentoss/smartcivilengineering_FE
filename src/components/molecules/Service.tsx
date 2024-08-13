import React from 'react';
import { Link } from "react-router-dom";

interface ServiceProps {
    serviceName: string;
    imageUrl: string;
    previewText: string;
    serviceNumber: number;
}

const Service: React.FC<ServiceProps> = ({ serviceName, imageUrl, previewText, serviceNumber }) => {
    return (
        <div className='w-full md:w-1/3 lg:w-1/4 p-4'>
            <div className='flex items-center mb-4'>
                <div className='w-[62px] h-[62px] rounded-full bg-[#64b404] flex items-center justify-center'>
                    <span className='text-white text-center font-bold text-[25px] mt-[2px]'>{serviceNumber}</span>
                </div>
                <h3 className='ml-4 text-xl font-semibold'>{serviceName}</h3>
            </div>
            <div className='mb-4'>
                <div className='service-image-holder overflow-hidden mb-3'>
                    <img 
                        className='service-img w-full h-auto transition-transform duration-500 hover:scale-105 rounded-md' 
                        src={imageUrl} 
                        alt='service' 
                    />
                </div>
                <p className='italic text-[16px] mb-4'>{previewText}</p>
                <div className='flex space-x-4 mb-4'>
                    <a className='service-preview-readmore text-[#64b404] text-[16px] underline hover:no-underline hover:text-[#64b404]' href='#'>Read More</a>
                    <Link to='/cart' className='service-preview-readmore text-[#64b404] text-[16px] underline hover:no-underline hover:text-[#64b404]'>Go to Cart</Link>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Service;
