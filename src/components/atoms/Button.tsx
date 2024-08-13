import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  backgroundColorHover?: string;
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'bg-dark-gray',
  color = 'text-white',
  onClick,
  children,
  backgroundColorHover = '',
}) => {
  const buttonClasses = `${backgroundColor} ${color} rounded px-4 py-2 min-w-[100px]} ${backgroundColorHover}`;

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
