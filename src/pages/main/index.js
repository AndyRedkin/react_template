import React from 'react';
import Container from '../../components/layout/Container';
import logoUrl from '../../assets/images/logo512.png'

const MainPage = () => {
  return (
      <Container>
        <img src={logoUrl} alt="logo test"/>
        <p>
          Main page example
        </p>
      </Container>
  );
};

export default MainPage;