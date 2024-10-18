import React,{createContext,useContext,useState} from 'react'
import {getWeatherDataByCity, getWeatherDataByCoordinates} from '../fetchData'

export const WeatherContext = createContext(null)

export const useWeather = ()=>{
    return useContext(WeatherContext)

}

export const WeatherContextProvider = (props) => {
    const[data,setData] = useState(null)
    const[city,setCity] = useState(null)

    const fetchData = async () =>{
        const response = await getWeatherDataByCity(city)
        setData(response);

    }

    const defaultData = async () =>{
        navigator.geolocation.getCurrentPosition(async (position)=>{
            console.log("position",position);
            const data = await getWeatherDataByCoordinates(position.coords.latitude,position.coords.longitude)
            setData(data);
            setCity(data && data.location.name)
    });

    }

    return(
        <WeatherContext.Provider value={{city,setCity,fetchData,data,defaultData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}