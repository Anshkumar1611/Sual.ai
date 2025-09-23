'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { Input, Button } from '../ui';
import { useChatContext } from '../../contexts';

export const MessageInput: React.FC = () => {
  const { inputMessage, setInputMessage, sendMessage, isLoading } = useChatContext();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-white p-4 border-t border-gray-100 rounded-b-2xl">
      <div className="bg-gray-100 rounded-2xl p-2 flex items-center space-x-2">
        <Input
          value={inputMessage}
          onChange={setInputMessage}
          onKeyPress={handleKeyPress}
          placeholder="Message HR Assistant..."
          variant="transparent"
          size="sm"
          disabled={isLoading}
          className="flex-1"
        />
        <Button
          onClick={sendMessage}
          disabled={!inputMessage.trim() || isLoading}
          variant="icon"
          size="sm"
          icon={Send}
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};
