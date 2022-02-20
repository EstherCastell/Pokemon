import React, {useEffect, useState} from 'react';
//import './App.css';
import './components/Pokemons.js'
import Pokemons from './components/Pokemons.js';



function App() {

 
/* useEffect(() => {  
  async function fetchPokemons() {
    let response = await getAllPokemon();
    console.log(response);
  }
  fetchPokemons();
   }, []); */

  return (
    <div>
      <h1> Pokemon </h1>
        <div>
          <Pokemons/>
        </div>
      </div>
    
  );
}

export default App;
