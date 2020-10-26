import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { device, fontFamily } from '../theme/theme';
import Loader from './Loader';

const Container = styled.ul`
  font-size: 1.2rem;
  display: flex;

  flex-wrap: wrap;

  > * {
    margin: 1rem 0;
    flex: 1 0 20ch;

    @media ${device.tablet} {
      margin: 1rem;
    }
  }
`;

const Names = styled.div`
  margin-bottom: 0.33rem;

  > span {
    font-family: ${fontFamily.display};
  }
`;

const Details = styled.div`
  opacity: 0.5;
`;

const baseUrl = process.env.REACT_APP_API_URL;

const Roster = () => {
  const { loading, data, error } = useFetch(`${baseUrl}/roster`);

  return (
    <>
      {(() => {
        if (loading) return <Loader />;

        if (!error && data)
          return (
            <Container>
              {data.map(
                ({
                  player_id,
                  player_name,
                  position_type,
                  season_from,
                  gameday_from,
                }) => (
                  <li key={player_id}>
                    <Names>
                      <span>{player_name}</span>, {position_type.toLowerCase()}
                    </Names>
                    <Details>
                      from{' '}
                      <strong>
                        season {season_from} day {gameday_from}
                      </strong>
                    </Details>
                  </li>
                )
              )}
            </Container>
          );
      })()}
    </>
  );
};

export default Roster;
