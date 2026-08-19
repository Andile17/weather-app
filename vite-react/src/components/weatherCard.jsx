import React from 'react'
import './weather.css'
import clear_icon from '../assets/clear.png'

const WeatherCard = () => {
  return (
    <div className='weather'>

        <div>
          <img src={clear_icon} className='weather-icon'></img>
          </div>
          <p className='temperature'>16c</p>
          <p className='location'>London</p>
          
        </div>
      

  )
}

export default WeatherCard
