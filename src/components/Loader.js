import React from 'react';
import styled from 'styled-components';

const Spinning = styled.div`
  animation: spin 1s infinite linear;
  height: 1em;
  width: 1em;
  font-size: 1em;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => <Spinning>🌮</Spinning>;

export default Loader;
