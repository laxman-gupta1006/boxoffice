import React from 'react'
import {Link} from 'react-router-dom'
import { SearchCard, Star } from '../styled';
import { StyledShowCard } from './ShowCard.styled';
export const ShowCard = ({ id, image, name, summary,onStarClick,isFav}) => {
   const summaryAsText = summary
     ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
     : 'No description';
   return (
     <StyledShowCard key={id}>
       <div className='img-wrapper'>
         <img src={image} alt="show" />
       </div>
 
       <h1>{name}</h1>
 
       <p>{summaryAsText}</p>
 
       <div className='btns'>
         <Link to={`/show/${id}`}>Read more</Link>
         <button type="button" onClick={()=>onStarClick()}><Star isFav={isFav}/></button>
       </div>
     </StyledShowCard>
   );
 };

