'use client';

import React from 'react';
import { Message } from '../Message';
import { TypingIndicator } from '../TypingIndicator';
import { useChatContext } from '../../contexts';

export const MessageList: React.FC = () => {
  const { messages, isLoading } = useChatContext();

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-100">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  );
};
