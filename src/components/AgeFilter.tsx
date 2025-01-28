import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Activity } from '../types';
import { useUser } from '../context/UserContext';

const FilterContainer = styled(motion.div)`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FilterTag = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 20px;
  background: ${props => props.theme.colors.secondary};
  color: white;
  cursor: pointer;
`;

interface AgeFilterProps {
  activities: Activity[];
  onFilterChange: (filtered: Activity[]) => void;
}

function AgeFilter({ activities, onFilterChange }: AgeFilterProps) {
  const { user } = useUser();

  const filterActivities = (age: number) => {
    return activities.filter(
      activity => age >= activity.ageRange.min && age <= activity.ageRange.max
    );
  };

  useEffect(() => {
    if (user) {
      const filtered = filterActivities(user.age);
      onFilterChange(filtered);
    }
  }, [user, activities]);

  return (
    <FilterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>Age-Appropriate Content</h3>
      <div>
        {[5, 8, 11, 13, 15].map((age) => (
          <FilterTag
            key={age}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(filterActivities(age))}
          >
            {age}+ Years
          </FilterTag>
        ))}
      </div>
    </FilterContainer>
  );
}

export default AgeFilter; 