import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Cast } from '../components/show/Cast';
import { Details } from '../components/show/Details';
import { Seasons } from '../components/show/Seasons';
import { ShowMainData } from '../components/show/ShowMainData';
import { MainDataWrapper } from '../components/show/ShowMainData.styled';
import { FlexGrid } from '../components/styled';
import { apiGet } from '../misc/config';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';
export const Show = () => {
  const { id } = useParams();
 const {show,isLoading,error}=useShow(id)
  
  if (isLoading) {
    return  <FlexGrid><div class="loader"></div></FlexGrid> ;
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
