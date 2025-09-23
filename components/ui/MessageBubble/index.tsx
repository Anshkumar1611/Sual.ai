import React from 'react';

interface MessageBubbleProps {
  children: React.ReactNode;
  isUser?: boolean;
  className?: string;
  maxWidth?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  children,
  isUser = false,
  className = '',
  maxWidth = 'max-w-[80%]',
}) => {
  const alignmentClasses = isUser ? 'flex flex-col items-end' : 'flex flex-col items-start';
  
  return (
    <div className={`${maxWidth} py-3 px-4 message-bubble bg-gray-200 text-gray-800 rounded-2xl ${alignmentClasses} ${className}`}>
      {children}
    </div>
  );
};
