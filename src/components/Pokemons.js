import React, { useState } from "react";
import { Fetch } from "./Fetch";
import {Cards} from './cards/Cards'



const Pokemons = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const state = Fetch(url)
    const {loading, data} = state
    loading ? console.log('loading'):
    console.log(data.results)
  
    return (
    <div>
      <div className="button">
        <button onClick={()=>setUrl(data.previous)}>Previous</button>
        <button onClick={()=>setUrl(data.next)}>Next</button>
      </div>
      {
        loading
        ?
        <h1>Loading...</h1>
        :
      <Cards results={data.results}/>
      }
      
    </div>
    
  )
}

export default Pokemons