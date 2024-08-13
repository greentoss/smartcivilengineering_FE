import React from 'react';
import partn1 from '@/assets/images/partn1.png';
import partn2 from '@/assets/images/partn2.png';
import partn3 from '@/assets/images/partn3.png';
import partn4 from '@/assets/images/partn4.png';
import partn5 from '@/assets/images/partn5.png';
import partn6 from '@/assets/images/partn6.png';

const ClientsList: React.FC = () => {

    const clients = [
        { id: 1, image: partn1, alt: 'Client 1' },
        { id: 2, image: partn2, alt: 'Client 2' },
        { id: 3, image: partn3, alt: 'Client 3' },
        { id: 4, image: partn4, alt: 'Client 4' },
        { id: 5, image: partn5, alt: 'Client 5' },
        { id: 6, image: partn6, alt: 'Client 6' },
    ];
    
    return (
        <div className="mb-3">
            <div className="flex flex-col items-center">
                <h2 className="text-center text-2xl font-semibold">Our Clients</h2>
                <p className="text-center text-lg w-3/4 pt-3 pb-3">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                {clients.map((client) => (
                    <div key={client.id} className="w-1/6 p-2">
                        <img src={client.image} alt={client.alt} className="w-full h-auto" />
                    </div>
                ))}
            </div>
            <hr className="mt-6 border-t border-gray-300" />
        </div>
    );
}

export default ClientsList;
