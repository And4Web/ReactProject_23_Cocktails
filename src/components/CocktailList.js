import React from 'react'
import Loading from './Loading';
import Cocktail from './Cocktail'
import {useGlobalContext} from '../context';

function CocktailList() {
  const {loading, cocktails} = useGlobalContext();
  if(loading){
    return <Loading/>
  }
  if(cocktails.length < 1){
    return <h2 className='section-title'>No cocktails matched your search...</h2>
  }
  return (
    <div>
      <h1>Cocktail List</h1>
    </div>
  )
}

export default CocktailList
