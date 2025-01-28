import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Activity } from '../../types';

const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Title = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Badge = styled.span`
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

interface ActivityCardProps {
  activity: Activity;
  onSelect: (activity: Activity) => void;
}

function ActivityCard({ activity, onSelect }: ActivityCardProps) {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(activity)}
    >
      <Title>{activity.title}</Title>
      <div>
        <Badge>{activity.type}</Badge>
        <Badge>{activity.difficulty}/5</Badge>
        <Badge>{activity.duration}min</Badge>
      </div>
      <p>{activity.description}</p>
    </Card>
  );
}

export default ActivityCard; 