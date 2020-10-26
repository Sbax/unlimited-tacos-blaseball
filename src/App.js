import React from 'react';
import { Route } from 'wouter';
import Home from './Home';
import Page from './Page';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Route path="/" component={Home} />
      <Route path="/:page">{({ page }) => <Page slug={page} />}</Route>
    </>
  );
};

export default App;
