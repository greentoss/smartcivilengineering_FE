import React from 'react';

interface ArticleProps {
    date: string;
    title: string;
    imageUrl: string;
    previewText: string;
}

const Article: React.FC<ArticleProps> = ({ date, title, imageUrl, previewText }) => {
    const [day, month] = date.split('-');

    return (
        <div className='container mx-auto mb-6'>
            <div className='flex justify-between items-center pb-3'>
                <div className='w-[62px] h-[62px] rounded-full bg-[#64b404] flex flex-col justify-center items-center text-white'>
                    <span className='text-center font-bold text-[25px] mt-[2px]'>{day}</span>
                    <span className='text-center leading-[14px]'>{month}</span>
                </div>
                <h3 className='flex-grow text-xl font-semibold pl-4'>{title}</h3>
            </div>
            <div className='flex'>
                <div className='w-1/4 overflow-hidden p-0'>
                    <img 
                        className='w-full h-auto rounded-md transition-transform duration-500 hover:scale-105' 
                        src={imageUrl} 
                        alt='article' 
                    />
                </div>
                <div className='w-3/4 pl-4'>
                    <p className='italic text-[16px]'>{previewText}</p>
                    <span>
                        <a className='text-[#64b404] text-[16px] underline hover:no-underline hover:text-[#64b404]' href='#'>
                            Read More
                        </a>
                    </span>
                </div>
            </div>
            <hr className='my-4' />
        </div>
    );
}

export default Article;
