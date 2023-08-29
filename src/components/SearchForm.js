import React from 'react'
import {useGlobalContext} from '.././context';

function SearchForm() {
  const {setSearchTerm} = useGlobalContext();
  return (
    <div>
      <h1>Search Form</h1>
    </div>
  )
}

export default SearchForm
