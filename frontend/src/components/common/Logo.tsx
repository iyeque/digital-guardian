import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AngelIcon = styled(motion.svg)`
  width: 40px;
  height: 40px;
  color: ${props => props.theme.colors.primary};
`;

const LogoText = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
`;

function Logo() {
  return (
    <LogoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <AngelIcon
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        whileHover={{ y: -5 }}
      >
        <path
          d="M12 2L9 7H15L12 2Z"
          fill="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z"
          strokeWidth="2"
        />
        <path
          d="M12 17V22M9 19L15 19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </AngelIcon>
      <LogoText>Digital Guardian</LogoText>
    </LogoContainer>
  );
}

export default Logo; 