import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Achievement } from '../../types';

const AchievementContainer = styled.div`
  padding: 1.5rem;
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const AchievementCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.accent};
  }
`;

const AchievementIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

interface AchievementSystemProps {
  achievements: Achievement[];
  onAchievementClick: (achievement: Achievement) => void;
}

function AchievementSystem({ achievements, onAchievementClick }: AchievementSystemProps) {
  return (
    <AchievementContainer>
      <h2>Your Guardian Achievements</h2>
      <AchievementGrid>
        <AnimatePresence>
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              onClick={() => onAchievementClick(achievement)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <AchievementIcon>
                {/* Add achievement icon here */}
              </AchievementIcon>
              <h3>{achievement.name}</h3>
              <p>{achievement.description}</p>
              <small>Earned: {new Date(achievement.dateEarned).toLocaleDateString()}</small>
            </AchievementCard>
          ))}
        </AnimatePresence>
      </AchievementGrid>
    </AchievementContainer>
  );
}

export default AchievementSystem; 