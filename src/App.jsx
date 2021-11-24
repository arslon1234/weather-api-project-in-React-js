import React, { useState, useEffect, useRef, createContext } from "react";
import './app.scss'
import { Api } from "./Api";
import { Switch, Route, Link} from 'react-router-dom'
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Africa from "./components/africa/Africa";
import Asia from "./components/asia/Asia";
import Europa from "./components/europa/Europa";
import West from './components/west/West'
import CentralAmerica from './components/centralAmerica/CentralAmerica'
import SouthAmerica from './components/southAmerica/SouthAmerica'
import Home from "./components/home/Home";
import axios from "axios";
export const MyContext = createContext()
export default function App() {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await Api(query)
      setWeather(data)
      setQuery("")
      console.log(data)
      {
     
      }
    }
  }
  useEffect(() => {
    axios.get("https://api.openweathermap.org//data/2.5/weather=" + "Albania").then(res=>{
      console.log(res.data)
    })
  }, [])
  return (

    <>
      <MyContext.Provider value={{search:search, query:query, setQuery:setQuery, weather:weather, setWeather:setWeather}}>
      <div className="app">
      <Switch>
        <Route exact path='/' component={Body} />
        <Route exact path='/africa' component={Africa} />
        <Route exact path='/asia' component={Asia} />
        <Route exact path='/europa' component={Europa}/>
        <Route exact path='/west' component={West}/>
        <Route exact path='/europa' component={Europa}/>
        <Route exact path='/central' component={CentralAmerica}/>
        <Route exact path='/south' component={SouthAmerica}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
      </div>
      </MyContext.Provider>
     
    </>
  );
}








// {weather.main && (
//   <div className="city">
//       <div className="info">
//           <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
//       </div>
//       <div className="details">
//           <h2 className="city-name">
//               <span>{weather.name}</span>
//               <sup>{weather.sys.country}</sup>
//           </h2>
//           <div className="city-temp">
//               {Math.round(weather.main.temp)}
//               <sup>&deg;C</sup>
//               <p>{weather.weather[0].description}</p>
//           </div>
//       </div>
//   </div>
// )}

{/* <input type="text"
         onChange={e=> setQuery(e.target.value)}
          className="search-bar" placeholder="Search..."
           value={query} onKeyPress={search} /> */}