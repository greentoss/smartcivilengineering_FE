import React from 'react';
import Tape from '../../atoms/Tape';
import SocialLink from '../../atoms/SocialLink';

const contactItems = [
  { iconClass: 'fas fa-map-marker-alt', text: '04128. Cedros Ave Solana Beach, California' },
  { iconClass: 'fas fa-phone', text: '+380502932772', link: 'tel:+380502932772' },
  { iconClass: 'fas fa-envelope', text: 'smartandcivileng@gmail.com', link: 'mailto:smartandcivileng@gmail.com' },
];

const socialItems = [
  { iconClass: 'fab fa-facebook-f', link: '#' },
  { iconClass: 'fab fa-twitter', link: '#' },
  { iconClass: 'fab fa-linkedin-in', link: '#' },
  { iconClass: 'fab fa-github', link: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray flex flex-col">
      <Tape />
      <div className=''>
        <a id="contact" />
        <div className="container p-0 pt-5 mx-auto">
          <div className="flex flex-col sm:flex-row mx-5 sm:mx-auto justify-between">
            <div className="sm:w-1/2">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center mb-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-custom-gray text-custom-icon rounded-full hover:text-hover-blue hover:border-2 hover:border-blue-500">
                    <i className={item.iconClass} />
                  </div>
                  <p className="m-0 text-white ml-4">
                    {item.link ? (
                      <a href={item.link} className="text-white">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="sm:w-1/2">
              <p className="text-white">
                <span>About the company :</span>
              </p>
              <p className="text-custom-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>
              <div className="flex space-x-4 mt-4">
                {socialItems.map((item, index) => (
                  <SocialLink 
                    key={index} 
                    iconClass={item.iconClass} 
                    link={item.link} 
                    shape="round" // or "square" depending on your preference
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-3 pt-4 w-full">
            <p className="text-white">2024 smart civil engineering &copy;</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
