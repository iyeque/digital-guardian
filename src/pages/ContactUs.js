import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

function ContactUs() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Description>
        Have questions or suggestions? We'd love to hear from you! 
        Fill out the form below and we'll get back to you soon.
      </Description>
      <ContactForm />
    </ContactContainer>
  );
}

export default ContactUs; 