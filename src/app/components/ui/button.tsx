import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-white';
  const variantClasses = variant === 'outline' 
    ? 'border border-gray-300 bg-transparent hover:bg-gray-200'
    : 'bg-blue-500 hover:bg-blue-600';

  return <button className={`${baseClasses} ${variantClasses}`} {...props} />;
};