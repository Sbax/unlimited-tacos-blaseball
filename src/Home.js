import React from 'react';
import styled from 'styled-components';
import Main from './components/Main';
import Roster from './components/Roster';
import { Splash as DefaultSplash } from './components/Splash';
import { device, fontFamily } from './theme/theme';

const Splash = styled(DefaultSplash)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;
`;

const Section = styled.section`
  flex: 1;

  @media ${device.tablet} {
    padding: 3rem;
  }
`;

const LowerSection = styled(Section)`
  grid-column: 1 / span 2;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-family: ${fontFamily.display};
  margin-bottom: 0.5rem;

  opacity: 0.5;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: ${fontFamily.display};
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

const Twitter = styled.h2`
  font-family: ${fontFamily.display};
  font-size: 2rem;
  > a {
    font-weight: normal;
  }
`;

const Home = () => {
  return (
    <Main>
      <Splash>
        <Section>
          <Subtitle>72° and Infinite</Subtitle>
          <Title>
            Unlimited
            <br />
            Tacos
          </Title>
          <Twitter>
            <a href="https://twitter.com/TACOBLASEBALL">@tacoblaseball</a>
          </Twitter>
        </Section>
        <Section></Section>
        <LowerSection>
          <Roster />
        </LowerSection>
      </Splash>
    </Main>
  );
};

export default Home;
