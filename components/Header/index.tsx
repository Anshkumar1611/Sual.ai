import React from 'react';
import { Avatar, Button } from '../ui';

export const Header: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-t-2xl border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            text="AI"
            variant="square"
            size="md"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">AI Chat Assistant</h2>
            <p className="text-sm text-gray-600">HR Assistant</p>
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-gray-100 px-4 py-2 text-gray-300 hover:bg-gray-300"
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
};
