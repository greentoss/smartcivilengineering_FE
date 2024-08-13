import React from 'react';

const Contacts: React.FC = () => {
    return (
        <div className="container mx-auto pt-3 px-4">
            <div className='flex flex-col md:flex-row md:space-x-8'>
                {/* Contact Form */}
                <div className='w-full md:w-2/3 mb-6'>
                    <h2 className='text-xl font-semibold mb-2'>Contact Form</h2>
                    <hr className='mb-4' />
                    <form className="mb-5" method="post" id="contactForm" name="contactForm">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
                            <input 
                                type="text" 
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#64b404] focus:ring-2 focus:ring-[#64b404] focus:shadow-lg" 
                                name="name" 
                                id="name" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Your City:</label>
                            <input 
                                type="text" 
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#64b404] focus:ring-2 focus:ring-[#64b404] focus:shadow-lg" 
                                name="city" 
                                id="city" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your E-mail:</label>
                            <input 
                                type="email" 
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#64b404] focus:ring-2 focus:ring-[#64b404] focus:shadow-lg" 
                                name="email" 
                                id="email" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message:</label>
                            <textarea 
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#64b404] focus:ring-2 focus:ring-[#64b404] focus:shadow-lg" 
                                name="message" 
                                id="message" 
                                cols={30} 
                                rows={10}
                            ></textarea>
                        </div>
                        <div className="flex justify-end pt-3">
                            <div className='flex space-x-4'>
                                <button type='button' className='w-[90px] bg-[#64b404] text-white py-2 rounded-md'>Edit</button>
                                <button type='button' className='w-[90px] bg-[#64b404] text-white py-2 rounded-md'>Clear</button>
                                <button type="submit" className="w-[90px] bg-[#64b404] text-white py-2 rounded-md border-2 border-[#343a40] hover:bg-[#343a40] hover:border-[#343a40]">Submit</button>
                            </div>
                        </div>
                        <hr className='mt-4' />
                    </form>
                </div>

                {/* Contacts Information */}
                <div className='w-full md:w-1/3'>
                    <div className='contacts-box mb-6'>
                        <h2 className='text-xl font-semibold mb-2'>Contacts</h2>
                        <hr className='mb-4' />
                        <div className='flex items-center py-2'>
                            <p className='w-[100px] font-medium'>Country:</p><span>Ukraine</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <p className='w-[100px] font-medium'>City:</p><span>Kyiv</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <p className='w-[100px] font-medium'>Phone:</p><span>+380502932772</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <p className='w-[100px] font-medium'>Email:</p><span>smartandcivileng@gmail.com</span>
                        </div>
                    </div>
                    <div className='contacts-box'>
                        <h2 className='text-xl font-semibold mb-2'>Other Information</h2>
                        <hr className='mb-4' />
                        <p className='italic text-[16px]'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta- tum deleniti atque corrupti quos dolores et quas molestias excep- turi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
