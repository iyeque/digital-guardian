import React from 'react';
import styled from 'styled-components';
import YouTubePlayer from '../components/YouTubePlayer';

const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

function Videos() {
  const videoIds = ['video_id_1', 'video_id_2', 'video_id_3']; // Replace with actual video IDs

  return (
    <VideosContainer>
      <Title>Fun Videos for Kids!</Title>
      <VideoGrid>
        {videoIds.map((videoId, index) => (
          <YouTubePlayer key={index} videoId={videoId} />
        ))}
      </VideoGrid>
    </VideosContainer>
  );
}

export default Videos; 