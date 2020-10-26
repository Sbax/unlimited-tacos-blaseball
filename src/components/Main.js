import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../theme/theme';
import Navbar from './Navbar';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  max-width: ${breakpoints.extraLarge};
  margin: auto;
`;

const Container = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;

  margin: auto;
  padding: 0 2rem;
  padding-bottom: 2rem;
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
