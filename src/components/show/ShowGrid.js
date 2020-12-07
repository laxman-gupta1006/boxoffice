import React from 'react'
import { ShowCard } from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { useShows } from '../../misc/custom-hooks';
import {FlexGrid} from '../styled'
const ShowGrid = ({result}) => {
const [favoriteShows,dispatchFavorite]=useShows()
   return <FlexGrid>
   {
      result.map(item => {
      const isFav=favoriteShows.includes(item.show.id)
      const onStarClick = () => {
         if(isFav){
            dispatchFavorite({type:'REMOVE',showId:item.show.id})
         }else{
            dispatchFavorite({type:'ADD',showId:item.show.id})
         }
      }
      return(<ShowCard 
         id={item.show.id}
         image={item.show.image ? item.show.image.medium:IMAGE_NOT_FOUND}
         name={item.show.name}
         summary={item.show.summary}
         onStarClick={()=>onStarClick()}
         isFav={isFav}
         />)})
   }
</FlexGrid> 
};
export default ShowGrid;