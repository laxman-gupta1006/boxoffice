import React, { useState, useEffect } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { FlexGrid } from '../components/styled';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';
const Favorite = () => {
  const [favorite] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (favorite && favorite.length > 0) {
      const promises = favorite.map(showId => apiGet(`shows/${showId}`));
      Promise.all(promises).then(apiData=> apiData.map(show=>({show})))
        .then(result => {
          setShows(result);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <MainPageLayout>
      {isLoading &&  <FlexGrid><div className="loader"></div></FlexGrid> }
      {error && <div>Error Occured :{error}</div>}
      {!isLoading && !shows && <FlexGrid><b>No favorite show</b></FlexGrid> }
      {!isLoading && !error && shows && <ShowGrid result={shows}/>}
    </MainPageLayout>
  );
};
export default Favorite;
