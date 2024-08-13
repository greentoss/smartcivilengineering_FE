import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from '@/store';
// import ukFlag from '@/assets/icons/ukraine-flag-icon.svg';
// import enFlag from '@/assets/icons/united-states-flag-icon.svg';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const dispatch = useDispatch<Dispatch>();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const languages = [
    { code: 'en', name: 'En' },
    { code: 'ua', name: 'Ua' },
  ];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {languages.map(({ code, name }, index) => (
        <React.Fragment key={code}>
          <div
            onClick={() => dispatch.language.changeLanguage(code)}
            className={`flex items-center cursor-pointer text-white ${
              currentLanguage === code ? 'font-bold' : ''
            }`}
          >
            {/* <img src={flag} alt={`${name} flag`} className="h-4 w-4" /> */}
            <span>{name}</span>
          </div>
          {index < languages.length - 1 && (
            <span className="text-white">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
