import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import {
  Home,
  Login,
  Register,
  Dashboard,
  Activities,
  Progress,
  ParentalControl
} from './pages';

const theme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    accent: '#F5A623',
    background: '#F8F9FA',
    text: '#333333',
    error: '#FF4444',
    success: '#4CAF50'
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Comic Sans MS', cursive"
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  }
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/activities"
                element={
                  <PrivateRoute>
                    <Activities />
                  </PrivateRoute>
                }
              />
              <Route
                path="/progress"
                element={
                  <PrivateRoute>
                    <Progress />
                  </PrivateRoute>
                }
              />
              <Route
                path="/parental-control"
                element={
                  <PrivateRoute>
                    <ParentalControl />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App; 