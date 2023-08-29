import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
