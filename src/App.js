import React from 'react';
import {Routes, Route} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';


function App() {
  return(
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/singlecocktail" element={<SingleCocktail/>}></Route>
      <Route exact path="*" element={<Error/>}></Route>     
    </Routes>
  )
}

export default App;
