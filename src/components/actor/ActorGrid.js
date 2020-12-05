import React from 'react';
import { ActorCard } from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import {FlexGrid} from '../styled'
const ActorGrid = ({ result }) => {
   return <FlexGrid>
   {
      result.map(item => <ActorCard 
         image={item.person.image ? item.person.image.medium:IMAGE_NOT_FOUND}
         name={item.person.name}
         gender={item.person.gender}
         country={item.person.country? item.person.country.name:null}
         birthday={item.person.birthday}
         deathday={item.person.deathday}
         key={item.person.id}
         />)
   }
</FlexGrid> 
};
export default ActorGrid;
