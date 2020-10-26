const fetch = require('node-fetch');
const TEAM_SLUG = 'tacos';
const BASE_URL = 'http://api.blaseball-reference.com/v1';

exports.handler = async (event) => {
  const path = event.path.split('/').pop();

  if (path === 'roster') {
    return getRoster();
  }

  if (path === 'player') {
    const id = event.queryStringParameters.episode;
    if (!id)
      return {
        statusCode: 500,
        body: JSON.stringify({ data: 'Should provide a player id' }),
      };

    return getPlayer(id);
  }

  return {
    statusCode: 500,
    body: JSON.stringify({ data: 'Cannot handle this call' }),
  };
};

const getRoster = () =>
  doRequest(`${BASE_URL}/currentRoster?slug=${TEAM_SLUG}`);

const getPlayer = (id) => doRequest(`${BASE_URL}/playerInfo?playerId=${id}`);

const doRequest = async (url) => {
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ data: err.message }),
    };
  }
};
