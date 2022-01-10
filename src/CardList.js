import React from 'react';
import Card from './Card'

const CardList = ({superHeroes}, i) => {
  const cardComponent = superHeroes.map((user, i) => {
    return <Card name={superHeroes[i].name} email={superHeroes[i].email} img={superHeroes[i].img} alt={superHeroes[i].alt}/>
  })
    return (
    <div>
     {cardComponent}
  
  </div>
    )
}

export default CardList;