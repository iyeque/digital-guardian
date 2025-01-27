import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Welcome = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-bottom: 2rem;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Welcome>Welcome to our Children's Web Application!</Welcome>
      <Section>
        <VideoContainer>
          <iframe
            src="https://www.youtube.com/embed/video_id_here"
            title="Featured Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </Section>
    </HomeContainer>
  );
}

export default Home; 