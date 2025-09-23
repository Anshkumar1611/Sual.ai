'use client';

import React, { useState, useEffect } from 'react';
import { formatTime } from '../../utils';

interface ClientTimeProps {
  timestamp: Date;
  className?: string;
}

export const ClientTime: React.FC<ClientTimeProps> = ({ timestamp, className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span className={className}>--:-- --</span>;
  }

  return <span className={className}>{formatTime(timestamp)}</span>;
};
