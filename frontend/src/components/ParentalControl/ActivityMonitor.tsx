import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { io, Socket } from 'socket.io-client';

const MonitorContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ActivityLog = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ActivityItem = styled(motion.div)`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Activity {
  id: string;
  childId: string;
  type: string;
  title: string;
  timestamp: Date;
}

interface ActivityMonitorProps {
  childId: string;
}

function ActivityMonitor({ childId }: ActivityMonitorProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_WS_URL || '');
    setSocket(newSocket);

    newSocket.emit('join-room', `parent-${childId}`);

    newSocket.on('activity-update', (activity: Activity) => {
      setActivities(prev => [activity, ...prev]);
    });

    return () => {
      newSocket.close();
    };
  }, [childId]);

  return (
    <MonitorContainer>
      <h3>Real-time Activity Monitor</h3>
      <ActivityLog>
        {activities.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div>
              <strong>{activity.title}</strong>
              <p>{activity.type}</p>
            </div>
            <time>{new Date(activity.timestamp).toLocaleTimeString()}</time>
          </ActivityItem>
        ))}
      </ActivityLog>
    </MonitorContainer>
  );
}

export default ActivityMonitor; 