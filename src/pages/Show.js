import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Cast } from '../components/show/Cast';
import { Details } from '../components/show/Details';
import { Seasons } from '../components/show/Seasons';
import { ShowMainData } from '../components/show/ShowMainData';
import { apiGet } from '../misc/config';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, show: action.show, error: null };
    }
    case 'FETCH_FAILED': {
      return { isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};
const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

export const Show = () => {
  const { id } = useParams();
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    let isMounted = true;
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(result => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', show: result });
          }
        }, 2000);
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: error.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log(show)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error Occured {error}</div>;
  }
  return (
     <ShowPageWrapper>
  <ShowMainData
  image={show.image}
  name={show.name}
  rating={show.rating}
  summary={show.summary}
  tags={show.genres}
  />
     <InfoBlock>
        <h1>
           Details
        </h1>
        <Details
        status={show.status}
        network={show.network}
        premiered={show.premiered}
        />
     </InfoBlock>
     <InfoBlock>
        <h1>
           Seasons
        </h1>
        <Seasons seasons={show._embedded.seasons}/>
     </InfoBlock>
     <InfoBlock>
        <h1>
           Cast
        </h1>
        <Cast cast={show._embedded.cast}/>
     </InfoBlock>
  </ShowPageWrapper>
   );
};
