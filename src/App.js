import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar.js';
//import './App.css';
import './components/Pokemons.js'
import Pokemons from './components/Pokemons.js';



function App() {

 
  return (
    <div>
      <Navbar/>
      
        <div>
          <Pokemons/>
        </div>
      </div>
    
  );
}

export default App;
