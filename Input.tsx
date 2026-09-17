import React from 'react';

interface InputProps {
  variant?: 'default' | 'outline';
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  variant = 'default',
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  label,
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2';

  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 border border-gray-300 focus:ring-blue-500 focus:bg-white hover:bg-gray-150',
    outline: 'bg-white text-gray-800 border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : '';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full ${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      />
    </div>
  );
};

export default Input;
