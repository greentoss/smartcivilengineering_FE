import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Button, Tape } from '../../atoms';

const navItems = [
  { name: 'Main', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Services', path: '/services' },
  { name: 'Contacts', path: '/contacts' },
];

const Header: React.FC = () => {
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
                <Link to={item.path}>
                  <Button backgroundColor="bg-dark-gray" backgroundColorHover="bg-gray-700">
                    {item.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center ml-6 space-y-2">
            <div className="flex space-x-2 text-white">
              <span className="cursor-pointer text-blue-300">EN</span>
              <span>|</span>
              <span className="cursor-pointer text-blue-300">UA</span>
            </div>
            <Link to="/login">
              <Button backgroundColor="bg-dark-gray" backgroundColorHover="bg-blue-400">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button backgroundColor="bg-dark-gray" backgroundColorHover="bg-blue-400">
                SignUp
              </Button>
            </Link>
          </div>
        </nav>
      </div>
      <Tape />
    </header>
  );
};

export default Header;
