import React, {useEffect, useState} from 'react';
import './App.css';
import './components/Pokemons.js'
import Pokemons from './components/Pokemons.js';



function App() {

 const [pokemons, setPokemons] = useState ([]);

  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchPokemons = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPokemons(data.results))
    .catch(error => console.log(error))

  };

  useEffect(() => {
    fetchPokemons(pokeUrl);

  }, [])
  return (
    <div>
     <h1> Pokemon </h1>
     <div>
     <Pokemons pokemons={pokemons}/>
     </div>
     </div>
    
  );
}

export default App;
