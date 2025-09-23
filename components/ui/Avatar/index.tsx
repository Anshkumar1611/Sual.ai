import React from 'react';

interface AvatarProps {
  text: string;
  variant?: 'square' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  text,
  variant = 'circle',
  size = 'md',
  className = '',
  bgColor = 'bg-slate-700',
  textColor = 'text-white',
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };
  
  const shapeClasses = variant === 'circle' ? 'rounded-full' : 'rounded';
  
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`${sizeClasses[size]} ${bgColor} ${shapeClasses} flex items-center justify-center flex-shrink-0 ${className}`}>
      <span className={`${textColor} font-bold ${textSizeClasses[size]}`}>
        {text}
      </span>
    </div>
  );
};
