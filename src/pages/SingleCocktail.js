import React from 'react'
import { Link, useParams} from 'react-router-dom';

function SingleCocktail() {
  const params = useParams();
  return (
    <div>
      <h1>Single Cocktail</h1>
      <h3>{params.id.charAt(0).toUpperCase() + params.id.slice(1)}</h3>     
    </div>
  )
}

export default SingleCocktail
