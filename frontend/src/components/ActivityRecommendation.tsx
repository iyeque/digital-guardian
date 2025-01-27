import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActivityCard from './Dashboard/ActivityCard';
import { Activity } from '../types';

const RecommendationContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecommendationTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
`;

function ActivityRecommendation() {
  const [recommendedActivities, setRecommendedActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchRecommendedActivities = async () => {
      try {
        const response = await fetch('/api/activities/recommended');
        const data = await response.json();
        setRecommendedActivities(data);
      } catch (error) {
        console.error('Error fetching recommended activities:', error);
      }
    };

    fetchRecommendedActivities();
  }, []);

  return (
    <RecommendationContainer>
      <RecommendationTitle>Recommended Activities for You</RecommendationTitle>
      <div>
        {recommendedActivities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} onSelect={() => {}} />
        ))}
      </div>
    </RecommendationContainer>
  );
}

export default ActivityRecommendation; 