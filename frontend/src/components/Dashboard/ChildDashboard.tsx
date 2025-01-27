import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ActivityCard from './ActivityCard';
import ProgressTracker from '../ProgressTracker';
import { Activity } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 1rem;
`;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const WelcomeMessage = styled(motion.div)`
  grid-column: 1 / -1;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

function ChildDashboard() {
  const [recommendedActivities, setRecommendedActivities] = useState<Activity[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    // Fetch recommended activities based on user's age and progress
    const fetchRecommendedActivities = async () => {
      try {
        const response = await fetch(`/api/activities/recommended?userId=${user?.id}`);
        const data = await response.json();
        setRecommendedActivities(data);
      } catch (error) {
        console.error('Error fetching recommended activities:', error);
      }
    };

    fetchRecommendedActivities();
  }, [user]);

  const handleActivitySelect = (activity: Activity) => {
    // Handle activity selection and tracking
    console.log('Selected activity:', activity);
  };

  return (
    <DashboardContainer>
      <WelcomeMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Welcome back, {user?.name}! 👋</h1>
        <p>Ready to learn something new today?</p>
      </WelcomeMessage>

      <div>
        <h2>Recommended Activities</h2>
        <ActivityGrid>
          {recommendedActivities.map(activity => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onSelect={handleActivitySelect}
            />
          ))}
        </ActivityGrid>
      </div>

      <ProgressTracker />
    </DashboardContainer>
  );
}

export default ChildDashboard; 