import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DownloadSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  padding: 2rem;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: 2rem 0;
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  background: white;
  color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BrowserIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
`;

function ExtensionDownload() {
  return (
    <DownloadSection>
      <h2>Extend Your Guardian's Protection</h2>
      <p>Keep your digital guardian with you everywhere you go with our browser extension</p>
      
      <BrowserIcons>
        {/* Add browser icons here */}
      </BrowserIcons>

      <div>
        <DownloadButton
          href="https://chrome.google.com/webstore/digital-guardian"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download for Chrome
        </DownloadButton>
        <DownloadButton
          href="https://addons.mozilla.org/digital-guardian"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download for Firefox
        </DownloadButton>
      </div>
    </DownloadSection>
  );
}

export default ExtensionDownload; 