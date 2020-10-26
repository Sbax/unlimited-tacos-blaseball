const { useState, useEffect } = require('react');

export function useMarkdown(slug) {
  const [markdown, setMarkdown] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const file = require(`../pages/${slug}.md`);
      fetch(file.default)
        .then((response) => response.text())
        .then((text) => {
          setMarkdown(text);
          setLoading(false);
        });
    } catch (error) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.error(error);

        setLoading(false);
      }
    }
  }, [slug]);

  console.log(loading, markdown);
  return [loading, markdown];
}
