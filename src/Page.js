import React from 'react';
import Loader from './components/Loader';
import Main from './components/Main';
import Markdown from './components/Markdown';
import { useMarkdown } from './hooks/useMarkdown';
import NotFound from './NotFound';

const Page = ({ slug }) => {
  const [loading, markdown] = useMarkdown(slug);

  return (
    <Main>
      {(() => {
        if (loading) return <Loader />;
        if (!markdown) return <NotFound />;
        return <Markdown markdown={markdown} />;
      })()}
    </Main>
  );
};

export default Page;
