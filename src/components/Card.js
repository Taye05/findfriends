import React from 'react';
import "./Card.css";

const Card = ({img, name, email, alt, id}) => {
    return (
        
        
    <div class="container  p-10 m-10   bg-slate-900  ">
        <img class="image   " src= {`https://robohash.org/${id}`} alt={alt} />
        <div class="middle text-zinc-700">
        <h2 class="text">{name}</h2>
        <p class="text">{email}</p>
        </div>
    </div>
   
    
    );
}

export default Card;