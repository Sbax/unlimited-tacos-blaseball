import styled from 'styled-components';

export const Splash = styled.section`
  height: 100%;

  position: relative;
  &:before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url('./dot.png');
    background-size: 16px;

    z-index: -1;
  }
`;
