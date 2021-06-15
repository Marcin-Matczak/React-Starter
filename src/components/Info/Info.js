import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} photoSource={infoContents.image} />
    <h2>{infoContents.description}</h2>
    <p>{infoContents.content}</p>
  </Container>
);

export default Info;