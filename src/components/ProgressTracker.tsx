import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '../types';
import { useUser } from '../context/UserContext';

const ProgressContainer = styled(motion.div)`
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillBar = styled(motion.div)`
  height: 20px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  margin: 0.5rem 0;
`;

const AchievementBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background: ${props => props.theme.colors.accent};
  border-radius: 20px;
  color: white;
`;

function ProgressTracker() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <ProgressContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>Your Learning Journey</h2>

      <div>
        <h3>Skills Progress</h3>
        {Object.entries(user.progress.skillLevels).map(([skill, level]) => (
          <div key={skill}>
            <p>{skill}</p>
            <SkillBar
              initial={{ width: 0 }}
              animate={{ width: `${(level / 5) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        ))}
      </div>

      <div>
        <h3>Recent Achievements</h3>
        <AnimatePresence>
          {user.achievements.map((achievement) => (
            <AchievementBadge
              key={achievement.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={achievement.icon} alt="" />
              <span>{achievement.name}</span>
            </AchievementBadge>
          ))}
        </AnimatePresence>
      </div>
    </ProgressContainer>
  );
}

export default ProgressTracker; 