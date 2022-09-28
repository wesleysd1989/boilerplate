import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/undefined">ERRO 404</Link>
    </Container>
  );
}

export default Home;
