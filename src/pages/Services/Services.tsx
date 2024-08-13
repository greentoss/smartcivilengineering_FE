import React from 'react';
import { Service } from '@/components/molecules';


const Services: React.FC = () => {
    const services = [
        {
            serviceName: "Service Name 1",
            imageUrl: "https://via.placeholder.com/150",
            previewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            serviceNumber: 1
        },
        {
            serviceName: "Service Name 2",
            imageUrl: "https://via.placeholder.com/150",
            previewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            serviceNumber: 2
        },
        
        // Add more services as needed...
    ];

    return (
        <div className='container mx-auto mt-3 pb-3'>
            <div className='flex flex-wrap'>
                {services.map((service, index) => (
                    <Service 
                        key={index} 
                        serviceName={service.serviceName} 
                        imageUrl={service.imageUrl} 
                        previewText={service.previewText} 
                        serviceNumber={service.serviceNumber} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Services;
