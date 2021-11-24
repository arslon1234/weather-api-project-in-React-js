import './body.scss'
import {Switch, Route, Link} from 'react-router-dom'
import { useContext, useState } from 'react'
import Header from '../header/Header'
import { MyContext } from '../../App'
import Africa from '../africa/Africa'
import Home from '../home/Home'
export default function Body() {
       const value = useContext(MyContext)
       const [item, setItem] = useState(false)
       const [item2, setItem2] = useState(false)
       const [item3, setItem3] = useState(0)
      
       return (
           <>
              <Header/>
              <div className="body-header">
             <div className="body-header-item">
             <span>This global website presents OFFICIAL weather observations, weather forecasts and climatological information for selected cities supplied by National
              </span>
              <span>Meteorological & Hydrological Services (NMHSs) worldwide.The NMHSs make official weather observations in their respective countries. Links to their
              </span>
              <span>official weather service websites and tourism board/organization are also provided whenever available. Weather icons are shown alongside worded
              </span>
              <span>forecasts in this version to facilitate visual inspection.
              </span>
              <br />
              <span>By June 2021, WWIS provided official weather information for 2963 cities in which 2819 cities are available with forecast from 139 members while 2177
              </span>
              <span>cities are available with climatological information from 170 members. Suggestions to enrich the contents of this website are welcome.
              </span>
             </div>
              </div>
                <div className="body-item">
                      <div className="bothItem">
                      <div className="itemInfo">
                       
                       {value.weather.main && (
                           
              <div className="city">
              <button onClick={()=>setItem(!item)}>More Information</button>
              <div className={item ? "InfoDesc": "desc"}>
                           <div className="descItem">
                           <span>Name: {value.weather.name}</span>
                           <span>Country: {value.weather.sys.country}</span>
                           <span>Pressure: {value.weather.main.pressure}</span>
                           <span>Humidity: {value.weather.main.humidity}</span>
                           <span>Sunrise: {value.weather.sys.sunrise}</span>
                           <span>TimeZone: {value.weather.timezone}</span>
                           <span>Wind/speed: {value.weather.wind.speed}</span>
                           </div>
            </div>
                  <div className="info">
                      <img className="city-icon" src={`https://openweathermap.org/img/wn/${value.weather.weather[0].icon}@2x.png`} alt={value.weather.weather[0].description} />
                  </div>
                  <div className="details">
                      <h2 className="city-name">
                          <span>{value.weather.name}</span>
                          <sup>{value.weather.sys.country}</sup>
                      </h2>
                      <div className="city-temp">
                          {Math.round(value.weather.main.temp)}
                          <sup>&deg;C</sup>
                          <p>{value.weather.weather[0].description}</p>
                      </div>
                  </div>
              </div>
                )}
                </div>
                <div className="social">
                    <div className="socialHeader">
                        <div className="radio">
                            <span>
                            <input type="radio" name='name' />
                            <i>Present Weather</i>
                            </span>
                            <span>
                            <input type="radio" name='name' />
                            <i>Present temperature</i>
                            </span>
                        </div>
                        <div className="temp">
                            <span>Temperature unit (°C) 
                                <a href="#">Settings</a>
                            </span>
                        </div>
                    </div>
                    <div className="socialLegend">
                        <div className="legandItem">
                            <p>Legend: <span>Weather Icons</span></p>
                        </div>
                    </div>
                    <div className="socialBtn">
                        <button onClick={()=>setItem3({item3:1})}>WMO News</button>
                        <button onClick={()=>setItem3({item3:2})}>WMO on Facebook</button>
                        <button onClick={()=>setItem3({item3:3})}>WMO on Twitter</button>
                    </div>
                </div>
                      </div>
 
            <div className="country-body">
                <div className="countryItems">
                    <div className="continent">
                        <div className="earth">
                        <i class="fa-solid fa-earth-asia"></i>
                        </div>
                        <div className="continentItem"  onClick={()=>setItem2(!item2)}>
                            <span>Please select</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="location">
                        <div className="locationIcon">
                        <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div className="locationItem">
                            <span></span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={item2 ? "continentSource" : "continentSource2"}>
                        <div className="sourceItem" >
                        <Link to='./home' style={{textDecoration:"none"}}>
                            <span onClick={()=>setItem2(false)}>Pleace select</span>
                        </Link>
                            <Link to='./africa' style={{textDecoration:"none"}}>
                            <span onClick={()=>setItem2(false)}>Africa</span>
                            </Link>
                            <Link to='./asia' style={{textDecoration:"none"}}>
                            <span onClick={()=>setItem2(!item2)}>Asia</span>
                            </Link>
                            <Link to='./south' style={{textDecoration:"none"}}>
                            <span onClick={()=>setItem2(!item2)}>South America</span>
                            </Link>
                           <Link to='./central' style={{textDecoration:"none"}} > 
                            <span onClick={()=>setItem2(false)}>North and Central America</span>
                           </Link>
                            <Link to='./west' style={{textDecoration:"none"}}>
                            <span onClick={()=>setItem2(false)}>South West Pacific</span>
                            </Link>
                           <Link to='./europa' style={{textDecoration:"none"}}>
                           <span onClick={()=>setItem2(false)}>Europa</span>
                           </Link>
                        </div>
                    </div>
                    <div className="countries8">
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Albania</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Armenia</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span> Austria</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Azerbaijan</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Blarus</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Belgium</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Bulgaria</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Croatia </span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Cyprus</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Czech Republik</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Denmark</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Estonia</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>Finland</span>
                               </div>
                               <div>
                               <i class="fa-solid fa-caret-right"></i>
                                <span>France</span>
                               </div>
                           </div>
                </div>
            </div> 
</div>
            <div className="created">
            <p>Created by: Arslonbek Ro'ziboyev</p>
            </div>
              </>
       )
}



// tr>
//                                         <th><button onClick={()=>this.setState({count:1})}>Invoice1</button></th>
//                                         <th><button onClick={()=>this.setState({count:2})}>Invoice2</button></th>
//                                         <th><button onClick={()=>this.setState({count:3})}>Invoice3</button></th>
//                                         <th><button onClick={()=>this.setState({count:4})}>Invoice4</button></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                     {
//                                 count===1 ? <Invoice1/> : count===2 ? <Invoice2/> : count===3 ? <Invoice3/> : count===4 ? <Invoice4/> : ' '
//                                     }
//                                     </tr>
//                                 </tbody>
//                             </table>