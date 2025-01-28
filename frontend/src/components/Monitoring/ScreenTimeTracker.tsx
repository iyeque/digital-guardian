import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TrackerContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled(motion.div)`
  height: 20px;
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  margin: 1rem 0;
`;

const Warning = styled(motion.div)`
  background: ${props => props.theme.colors.error};
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
`;

interface ScreenTimeTrackerProps {
  limit: number; // in minutes
  onLimitReached: () => void;
}

function ScreenTimeTracker({ limit, onLimitReached }: ScreenTimeTrackerProps) {
  const [screenTime, setScreenTime] = useState(0);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScreenTime(prev => {
        const newTime = prev + 1;
        if (newTime >= limit) {
          onLimitReached();
          setIsWarning(true);
        } else if (newTime >= limit * 0.8) {
          setIsWarning(true);
        }
        return newTime;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [limit, onLimitReached]);

  const progress = (screenTime / limit) * 100;

  return (
    <TrackerContainer>
      <h3>Screen Time Today</h3>
      <ProgressBar
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <p>{screenTime} / {limit} minutes</p>

      <AnimatePresence>
        {isWarning && (
          <Warning
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            You're approaching your screen time limit!
          </Warning>
        )}
      </AnimatePresence>
    </TrackerContainer>
  );
}

export default ScreenTimeTracker; 