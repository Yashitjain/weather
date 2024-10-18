import React from 'react'
import { useWeather } from '../context/WeatherContext'
import { getWeatherDataByCity } from '../fetchData'

export default function Card() {
    const weather = useWeather();
  return (
    <div className='card'>
      <img src={weather.data && weather.data.current.condition.icon} alt="" />
      <h3>{weather.data? weather.data.current.temp_f + 'F' : ''}</h3>
      <h4>{weather.data && weather.data.location.name }</h4>
    </div>
  )
}
