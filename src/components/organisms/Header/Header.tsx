import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/images/logo.png';
import { Button, Tape, LanguageSwitcher } from '@/components/atoms';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: 'navigation.main', path: '/' },
    { name: 'navigation.about', path: '/about' },
    { name: 'navigation.articles', path: '/articles' },
    { name: 'navigation.services', path: '/services' },
    { name: 'navigation.contacts', path: '/contacts' },
  ].map((item) => ({ ...item, name: t(item.name) }));

  return (
    <header className="header bg-dark-gray flex flex-col">
      <div className="navbar flex flex-row py-4 container mx-auto justify-between items-center">
        <h2 className="headingMain text-light-gray m-0 text-2xl font-bold">SMART CIVIL ENGINEERING</h2>
        <div className="flex items-center relative">
          <img src={logo} className="logoTemp absolute left-2 top-2 h-12" alt="logo" />
        </div>
        <button className="navbar-toggler text-white md:hidden border border-white border-opacity-30 p-2 rounded">
          <span className="sr-only">Toggle navigation</span>
          <span className="material-icons">menu</span>
        </button>
        <nav className="hidden md:flex justify-between items-center w-full md:w-auto">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    isActive 
                      ? 'font-bold text-white' 
                      : 'text-white'
                  }
                >
                  <Button backgroundColor="bg-dark-gray" backgroundColorHover="hover:bg-gray-700">
                    {item.name}
                  </Button>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center ml-6 space-y-2">
            <LanguageSwitcher />
            <NavLink 
              to="/login"
              className={({ isActive }) => 
                isActive 
                  ? 'font-bold text-white' 
                  : 'text-white'
              }
            >
              <Button backgroundColor="bg-dark-gray" backgroundColorHover="hover:bg-blue-400">
                {t('navigation.login')}
              </Button>
            </NavLink>
            <NavLink 
              to="/register"
              className={({ isActive }) => 
                isActive 
                  ? 'font-bold text-white' 
                  : 'text-white'
              }
            >
              <Button backgroundColor="bg-dark-gray" backgroundColorHover="hover:bg-blue-400">
                {t('navigation.signup')}
              </Button>
            </NavLink>
          </div>
        </nav>
      </div>
      <Tape />
    </header>
  );
};

export default Header;
