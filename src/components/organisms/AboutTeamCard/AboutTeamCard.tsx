import React from 'react';
import SocialLink from '../../atoms/SocialLink';

interface SocialLinks {
    facebook?: string;
    phone?: string;
    email?: string;
    telegram?: string;
    instagram?: string;
}

interface AboutTeamCardProps {
    name: string;
    position: string;
    description: string;
    imageUrl: string;
    socialLinks: SocialLinks;
}

const AboutTeamCard: React.FC<AboutTeamCardProps> = ({ name, position, description, imageUrl, socialLinks }) => {
    const socialItems = [
        { iconClass: 'fab fa-facebook-f', link: socialLinks.facebook },
        { iconClass: 'fas fa-phone', link: socialLinks.phone ? `tel:${socialLinks.phone}` : undefined },
        { iconClass: 'fas fa-envelope', link: socialLinks.email ? `mailto:${socialLinks.email}` : undefined },
        { iconClass: 'fab fa-telegram-plane', link: socialLinks.telegram },
        { iconClass: 'fab fa-instagram', link: socialLinks.instagram },
    ].filter(item => item.link); // Filter out undefined links

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 flex">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                <div className="text-center">
                    <img src={imageUrl} alt="about-team-card-img" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover" />
                </div>
                <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">{name}</h4>
                    <h5 className="text-lg font-medium mb-2 text-gray-600">{position}</h5>
                    <p className="text-gray-700 text-sm mb-4">{description}</p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    {socialItems.map((item, index) => (
                        <SocialLink 
                            key={index} 
                            iconClass={item.iconClass} 
                            link={item.link!} 
                            shape="square" // or "square" depending on your preference
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutTeamCard;
