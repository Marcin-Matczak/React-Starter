import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} photoSource={faqContents.image} />
    <h2>{faqContents.description}</h2>
    <p><i>{faqContents.content}</i></p>
  </Container>
);

export default FAQ; 