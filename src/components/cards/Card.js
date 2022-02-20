import React from 'react'
import { Fetch } from '../Fetch'

export const Card = ({url}) => {
    const state = Fetch(url)
    const {loading, data} = state
  
    return (
    <div>
        {
            loading
            ?
            <h1> Loading</h1>
            :
            <div className='card'>
                <div className='name'>
                    <h5>{data.forms[0].name}</h5>
                </div>
                <div className='img'></div>
                <img src={data.sprites.front_default}alt='pokemon'/>
            </div>
        }
    </div>
  )
}
