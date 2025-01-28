import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import Games from './pages/Games';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const theme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFE66D',
    background: '#FFFFFF',
    text: '#2C3E50'
  },
  fonts: {
    main: "'Comic Sans MS', cursive, sans-serif"
  }
};

const AppContainer = styled.div`
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.text};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App; 