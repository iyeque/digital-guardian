import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/videos">Videos</Link></NavItem>
        <NavItem><Link to="/blog">Blog</Link></NavItem>
        <NavItem><Link to="/games">Games</Link></NavItem>
        <NavItem><Link to="/about-us">About Us</Link></NavItem>
        <NavItem><Link to="/contact-us">Contact Us</Link></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar; 