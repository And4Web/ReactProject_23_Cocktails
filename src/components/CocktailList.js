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
    <section className='section'>
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(item=>{
          return(
            <Cocktail key={item.id} {...item}/>
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList
