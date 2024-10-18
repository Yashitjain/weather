import React from 'react'
import { useWeather } from '../context/WeatherContext'
import Buttons from './Buttons';
export default function Inputs() {
    const weather = useWeather();
  return (
    <div className='inputDiv'>
      <input type="text"
      className='inputCity' 
      placeholder="Search Here"
      value={weather.data && weather.city}
      onChange={(e)=>weather.setCity(e.target.value)}/>
      <Buttons buttonType = "Search" onClick = {weather && weather.fetchData}/>
    </div>
  )
}
