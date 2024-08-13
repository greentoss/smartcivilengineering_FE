import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  backgroundColorHover?: string;
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'bg-dark-gray',
  color = 'text-white',
  onClick,
  children,
  className = '',
  backgroundColorHover = 'bg-gray-700',
}) => {
  const buttonClasses = `px-4 py-2 min-w-[100px] ${backgroundColor} ${color} rounded ${className} hover:${backgroundColorHover}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
