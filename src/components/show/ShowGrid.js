import React from 'react'
import { ShowCard } from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import {FlexGrid} from '../styled'
const ShowGrid = ({result}) => {
   return <FlexGrid>
   {
      result.map(item => <ShowCard 
         id={item.show.id}
         image={item.show.image ? item.show.image.medium:IMAGE_NOT_FOUND}
         name={item.show.name}
         summary={item.show.summary}
         />)
   }
</FlexGrid> 
};
export default ShowGrid;