import React from 'react'
import {Card} from './Card'
import './Cards.css'

export const Cards = ({results}) => {
  return (
    <div>
      <ul className='cards'>
        {
          results.map( data=>(
            <li className='card-item' key={data.name}>
              <Card url={data.url}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
