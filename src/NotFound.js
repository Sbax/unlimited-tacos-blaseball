import React from 'react';
import styled from 'styled-components';
import Loader from './components/Loader';
import { Splash as DefaultSplash } from './components/Splash';
import { fontFamily } from './theme/theme';

const Title = styled.h1`
  font-size: 4rem;
  font-family: ${fontFamily.display};
`;

const Splash = styled(DefaultSplash)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  > * + * {
    margin-top: 2rem;
  }
`;

const LoaderContainer = styled.span`
  font-size: 4rem;
`;

const NotFound = () => {
  return (
    <Splash>
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
      <Title>Nothing to see here</Title>
      <a href="/">Go back home</a>
    </Splash>
  );
};

export default NotFound;
