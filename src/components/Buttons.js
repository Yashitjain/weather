import React from 'react'
import { useWeather } from '../context/WeatherContext'

export default function Buttons(props) {
  return (
    <div className='buttons'>
      <button onClick={props.onClick}>{props.buttonType}</button>
    </div>
  )
}
