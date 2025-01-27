import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const BlogPost = styled.article`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

function Blog() {
  const blogPosts = [
    {
      title: "Fun Science Experiments for Kids",
      content: "Discover amazing science experiments you can do at home..."
    },
    {
      title: "Creative Art Projects",
      content: "Let's explore fun art projects using materials found at home..."
    }
  ];

  return (
    <BlogContainer>
      <Title>Kids' Blog</Title>
      {blogPosts.map((post, index) => (
        <BlogPost key={index}>
          <BlogTitle>{post.title}</BlogTitle>
          <p>{post.content}</p>
        </BlogPost>
      ))}
    </BlogContainer>
  );
}

export default Blog; 