'use client';

import React, { useRef, useEffect } from 'react';
import { Message } from '../Message';
import { TypingIndicator } from '../TypingIndicator';
import { useChatContext } from '../../contexts';

export const MessageList: React.FC = () => {
  const { messages, isLoading } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  // Scroll to bottom when loading state changes (typing indicator appears/disappears)
  useEffect(() => {
    scrollToBottom();
  }, [isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-slate-100">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};
