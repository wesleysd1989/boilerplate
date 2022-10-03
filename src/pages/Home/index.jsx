import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t('home')}</h1>
      <Link to="/profile">{t('profile')}</Link>
      <br />
      <Link to="/undefined">ERRO 404</Link>
    </Container>
  );
}

export default Home;
