import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

function AboutUs() {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Content>
        <h2>Our Mission</h2>
        <p>
          We're dedicated to creating a fun and safe learning environment for children.
          Through interactive games, educational videos, and engaging content, we aim
          to make learning an exciting adventure!
        </p>

        <h2>Our Team</h2>
        <p>
          Our team consists of educators, developers, and creative professionals who
          are passionate about children's education and development.
        </p>
      </Content>
    </AboutContainer>
  );
}

export default AboutUs; 