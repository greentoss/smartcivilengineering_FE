import React from 'react';
import image1 from '@/assets/images/page3_img1.jpg';
import { MainCarousel } from '@/components/organisms';

const Main: React.FC = () => {
    return (
        <>
            <MainCarousel />
            <div className='container mx-auto py-3'>
                <h2 className='text-center text-2xl font-semibold'>Overview of our main business goals</h2>
                <hr className='my-4' />
                <div className='flex flex-wrap justify-between'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 flex mt-3 mb-3'>
                            <div className='flex-shrink-0 mr-4'>
                                <img src={image1} alt='img' className='w-20 h-20 object-cover' />
                            </div>
                            <div className='flex-grow'>
                                <h3 className='text-lg font-semibold'>Strategic Planning</h3>
                                <p className='text-gray-600'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Main;
