import React from 'react';
import { Avatar, MessageBubble, TypingDots } from '../ui';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 justify-start">
      <Avatar
       text="AI"
       variant="square"
       size="md"
       className="mt-1"
    />
    <div>
      <MessageBubble isUser={false} className='mr-3'>
        <TypingDots />
      </MessageBubble>
    </div>
    </div>
  );
};
