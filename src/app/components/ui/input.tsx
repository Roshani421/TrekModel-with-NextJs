import React from 'react';

export const Input: React.FC<{ className?: string; type: string; id: string; placeholder: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ className, type, id, placeholder, value, onChange }) => {
  return (
    <input
      className={`px-4 py-2 rounded-md border border-gray-300 ${className}`}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};