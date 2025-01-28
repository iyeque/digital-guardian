import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <LayoutContainer>
      {user && <Sidebar />}
      <div style={{ flex: 1 }}>
        <Navbar />
        <MainContent>{children}</MainContent>
      </div>
    </LayoutContainer>
  );
}

export default Layout; 