import React from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';

const Header = styled.header`
  padding: 2rem;
`;

const HomeLink = styled.span`
  font-size: 2rem;
`;

const Container = styled.nav`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 2rem;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Container>
        <HomeLink>
          <Link href={'/'}>🌮</Link>
        </HomeLink>

        <Link href={'/example'}>Example</Link>

        <Link href={'/another-example'}>Another Example</Link>
      </Container>
    </Header>
  );
};

export default Navbar;
