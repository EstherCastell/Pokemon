import React from "react";
import './Cards.css'

const Pokemons = ({pokemons = []}) => {
    return (
        <div>
            {
                pokemons.map((item, index) => (
                    <div key={index} className="Cards">
                    <div className="Name">{item.name}</div>
                    <div>
                        <img src={item} alt=""></img>
                    </div>
                    </div>
                ))
            }
            
                
                    
                

            

        </div>
    )
}
export default Pokemons;