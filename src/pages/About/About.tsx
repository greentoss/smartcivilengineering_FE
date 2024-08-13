import React from 'react';

import { AboutTeamCard } from '@/components/organisms';
import { ClientsList } from '@/components/molecules';

const About: React.FC = () => {
    const teamMembers = [
        {
            name: "John Doe",
            position: "Lead Developer",
            description: "John is a highly skilled developer with over 10 years of experience in building scalable web applications. He enjoys working with the latest technologies and leading teams to success.",
            imageUrl: "https://via.placeholder.com/150",
            socialLinks: {
                facebook: 'https://facebook.com',
                phone: '123-456-7890',
                email: 'john.doe@example.com',
                telegram: 'https://t.me/johndoe',
                instagram: 'https://instagram.com/johndoe'
            }
        },
        {
            name: "Jane Smith",
            position: "UI/UX Designer",
            description: "Jane is a creative designer with a strong eye for detail. She has a passion for creating intuitive and visually appealing user interfaces.",
            imageUrl: "https://via.placeholder.com/150",
            socialLinks: {
                facebook: 'https://facebook.com',
                phone: '098-765-4321',
                email: 'jane.smith@example.com',
                telegram: 'https://t.me/janesmith',
                instagram: 'https://instagram.com/janesmith'
            }
        },
    
        // Add more team members as needed...
    ];

    return (
        <>
            <div className="container mx-auto pt-3 pb-3">
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-2xl font-semibold">About us</h2>
                    <p className="text-center text-lg w-3/4 pt-3 pb-3">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col w-full">
                        <div className="relative overflow-hidden cursor-pointer bg-gray-200 shadow-md rounded-lg p-6">
                            <div>
                                <img src="https://via.placeholder.com/600x400" alt="about-team-image" className="h-auto rounded-md transform transition-transform duration-500 hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Soluta esse molestie</h3>
                            <p className="text-gray-600 mt-2">
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. 
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                            </p>
                            <div className="absolute left-0 top-0 w-1 h-full bg-gray-400 transform scale-y-100 origin-bottom transition-transform duration-500"></div>
                            <div className="absolute left-0 top-0 w-1 h-full bg-green-500 transform scale-y-0 origin-bottom transition-transform duration-500 hover:scale-y-100"></div>
                        </div>
                        <hr className="my-6 border-t border-gray-300" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-2xl font-semibold">Our Team</h2>
                    <p className="text-center text-lg w-3/4 pt-3 pb-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="flex space-x-4">
                        {teamMembers.map((member, index) => (
                            <AboutTeamCard
                                key={index}
                                name={member.name}
                                position={member.position}
                                description={member.description}
                                imageUrl={member.imageUrl}
                                socialLinks={member.socialLinks}
                            />
                        ))}
                    </div>
                </div>
                <ClientsList />
            </div>
        </>
    );
};

export default About;
