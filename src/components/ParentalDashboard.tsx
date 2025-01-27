import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { User, Activity } from '../types';

const DashboardContainer = styled(motion.div)`
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const MetricCard = styled(motion.div)`
  padding: 1.5rem;
  background: ${props => props.theme.colors.secondary};
  color: white;
  border-radius: 12px;
  text-align: center;
`;

const ActivityLog = styled.div`
  margin-top: 2rem;
  max-height: 400px;
  overflow-y: auto;
`;

interface ParentalDashboardProps {
  childId: string;
}

function ParentalDashboard({ childId }: ParentalDashboardProps) {
  const [childData, setChildData] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Fetch child's data and activities
    const fetchData = async () => {
      const [userData, activitiesData] = await Promise.all([
        fetch(`/api/users/${childId}`).then(res => res.json()),
        fetch(`/api/users/${childId}/activities`).then(res => res.json())
      ]);
      
      setChildData(userData);
      setActivities(activitiesData);
    };

    fetchData();

    // Set up WebSocket for real-time updates
    const ws = new WebSocket('ws://your-server/monitoring');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.userId === childId) {
        updateActivityData(data);
      }
    };

    return () => ws.close();
  }, [childId]);

  const updateActivityData = (data: any) => {
    // Handle real-time updates
    setActivities(prev => [...prev, data.activity]);
  };

  return (
    <DashboardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Parental Dashboard</h2>
      
      <MetricsGrid>
        <MetricCard>
          <h3>Screen Time Today</h3>
          <p>{childData?.screenTimeLimit} minutes</p>
        </MetricCard>
        
        <MetricCard>
          <h3>Activities Completed</h3>
          <p>{activities.length}</p>
        </MetricCard>
        
        <MetricCard>
          <h3>Achievement Points</h3>
          <p>{childData?.progress.totalPoints}</p>
        </MetricCard>
      </MetricsGrid>

      <ActivityLog>
        <h3>Recent Activities</h3>
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p>{activity.title} - {new Date(activity.timestamp).toLocaleString()}</p>
          </motion.div>
        ))}
      </ActivityLog>
    </DashboardContainer>
  );
}

export default ParentalDashboard; 