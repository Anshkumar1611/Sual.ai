'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useChat } from '../hooks';

interface ChatContextType {
  messages: any[];
  inputMessage: string;
  setInputMessage: (message: string) => void;
  isLoading: boolean;
  sendMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const chatData = useChat();

  return (
    <ChatContext.Provider value={chatData}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
