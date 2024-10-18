import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';
import { useWeather } from './context/WeatherContext';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

function App() {
  const weather = useWeather();
  useEffect(()=>{
    weather.defaultData();
  },[])
  return (
    <div className="App">
      <h1>Weather forecast</h1>
      <Inputs />
      <Card />
      <Buttons buttonType="Refresh" onClick={weather && weather.defaultData}/>
    </div>
  );
}

export default App;
