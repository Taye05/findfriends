import React from 'react';
import Card from './Card'

const CardList = ({superHeroes}, i) => {
 
    return (
    <div>{
   superHeroes.map((user, i) => {
    return (<Card Key={i} 
                 name={superHeroes[i].name} 
                 email={superHeroes[i].email} 
                 img={superHeroes[i].img} 
                 alt={superHeroes[i].alt}/>)
  })
}
  </div>
    )
}

export default CardList;