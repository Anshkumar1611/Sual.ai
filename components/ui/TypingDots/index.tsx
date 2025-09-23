import React from 'react';
import { Avatar } from '..';

interface TypingDotsProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TypingDots: React.FC<TypingDotsProps> = ({
  color = 'bg-gray-500',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  return (
    <div 
    className={`flex items-center space-x-2 `}> 
  
    <div className={`flex items-center space-x-1 ${className}`}>
      <div className={`${sizeClasses[size]} ${color} rounded-full typing-indicator`}></div>
      <div 
        className={`${sizeClasses[size]} ${color} rounded-full typing-indicator`} 
        style={{ animationDelay: '0.2s' }}
      ></div>
      <div 
        className={`${sizeClasses[size]} ${color} rounded-full typing-indicator`} 
        style={{ animationDelay: '0.4s' }}
      ></div>
    </div>
    </div>
  );
};
