import React from 'react';
import styled from 'styled-components';

const GamesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const GameCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1rem;
  }
`;

function Games() {
  const games = [
    {
      title: "Math Adventure",
      description: "Learn math while having fun!",
      link: "#"
    },
    {
      title: "Word Puzzle",
      description: "Improve your vocabulary with fun puzzles!",
      link: "#"
    }
  ];

  return (
    <GamesContainer>
      <Title>Fun Games!</Title>
      <GameGrid>
        {games.map((game, index) => (
          <GameCard key={index}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <a href={game.link}>Play Now!</a>
          </GameCard>
        ))}
      </GameGrid>
    </GamesContainer>
  );
}

export default Games; 