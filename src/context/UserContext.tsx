import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  screenTime: number;
  updateScreenTime: (time: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [screenTime, setScreenTime] = useState(0);

  useEffect(() => {
    // Initialize WebSocket connection for real-time monitoring
    const ws = new WebSocket('ws://your-server/monitoring');
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'SCREEN_TIME_UPDATE') {
        setScreenTime(data.time);
      }
    };

    return () => ws.close();
  }, []);

  const updateScreenTime = (time: number) => {
    setScreenTime(time);
    // Send update to server for parental monitoring
    fetch('/api/screen-time', {
      method: 'POST',
      body: JSON.stringify({ time }),
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, screenTime, updateScreenTime }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 