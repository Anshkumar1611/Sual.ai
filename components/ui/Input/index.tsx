import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  variant?: 'default' | 'transparent' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  type?: 'text' | 'email' | 'password';
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  variant = 'default',
  size = 'md',
  className = '',
  onKeyPress,
  type = 'text',
}) => {
  const baseClasses = 'w-full transition-colors focus:outline-none text-gray-700 placeholder-gray-500';
  
  const variantClasses = {
    default: 'bg-white border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent',
    transparent: 'bg-transparent border-0 focus:ring-0',
    filled: 'bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  };
  
  const shapeClasses = 'rounded-xl';

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${shapeClasses} ${className}`}
    />
  );
};
