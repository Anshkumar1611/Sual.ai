import React from 'react';
import { ClientTime } from '../ClientTime';
import { Avatar, MessageBubble } from '../ui';

export interface MessageData {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface MessageProps {
  message: MessageData;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div
      className={`flex items-start space-x-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!message.isUser && (
        <Avatar
          text="AI"
          variant="square"
          size="md"
          className="mt-1"
        />
      )}
      
      <MessageBubble isUser={message.isUser}>
        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
        <ClientTime
          timestamp={message.timestamp}
          className="text-xs mt-2 text-gray-500"
        />
      </MessageBubble>
      
      {message.isUser && (
        <Avatar
          text="K"
          variant="circle"
          size="md"
          className="mt-1"
        />
      )}
    </div>
  );
};
