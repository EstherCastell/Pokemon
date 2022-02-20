import React, {useState, useEffect} from 'react'

export const Fetch = (url) => {
    const [pokemon, setPokemons] = useState({loading:true, data:null})

    useEffect(()=> {
        getAllPokemon(url)
    }, [url])
    
    async function getAllPokemon(url) {
        try {
        setPokemons({loading:true, data:null})    
        const resp = await fetch(url)
        const data = await resp.json()
        setPokemons({loading:false, data})
    }
    catch(e){
        console.log(e)
    }
}
  return pokemon
}

