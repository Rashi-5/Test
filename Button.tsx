import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 disabled:bg-blue-400',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 active:scale-95 disabled:bg-gray-200',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
