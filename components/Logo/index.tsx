import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image 
        src="/images/sualai.png" 
        alt="Sual.AI Logo" 
        width={150}
        height={32}
      />
    </div>
  );
};
