import React from 'react';
import { Header } from '../Header';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';
import { ChatProvider } from '../../contexts';

export const ChatBubble: React.FC = () => {
  return (
    <ChatProvider>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl w-full max-w-lg h-screen max-h-screen sm:h-[700px] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <Header />
        <MessageList />
        <MessageInput />
      </div>
    </ChatProvider>
  );
};
