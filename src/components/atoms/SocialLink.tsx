import React from 'react';

interface SocialLinkProps {
    iconClass: string;
    link: string;
    shape?: 'round' | 'square'; // You can specify 'round' or 'square'
    bgColor?: string; // Background color class
    textColor?: string; // Text color class
    hoverTextColor?: string; // Hover text color class
    hoverBorderColor?: string; // Hover border color class
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
    iconClass, 
    link, 
    shape = 'round', 
    bgColor = 'bg-custom-gray', 
    textColor = 'text-custom-icon', 
    hoverTextColor = 'hover:text-hover-blue', 
    hoverBorderColor = 'hover:border-blue-500' 
}) => {
    const shapeClasses = shape === 'round' ? 'rounded-full' : 'rounded';

    return (
        <a 
            href={link} 
            className={`flex items-center justify-center w-10 h-10 ${bgColor} ${textColor} ${shapeClasses} hover:border-2 ${hoverTextColor} ${hoverBorderColor}`}
        >
            <i className={iconClass} />
        </a>
    );
};

export default SocialLink;
