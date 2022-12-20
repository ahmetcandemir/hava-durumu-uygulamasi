import React from 'react'
import './wheather.css'
import './arkaplanjs.jpg'

function Wheatherresult({date,mintemp,maxtemp,condition,icon}) {
  return (
    <div className="sonuc">
        <h2>{date}</h2>
        <ul>
            <li><img src={icon} alt=""/></li>
            <li className='yazı'>{condition}</li>
            <li className='yazı'>{maxtemp } C / {mintemp} C</li>
        </ul>
    </div>
  )
}


export default Wheatherresult

