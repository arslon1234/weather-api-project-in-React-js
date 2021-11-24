import React from 'react'
import axios from 'axios'
const URL = "https://api.openweathermap.org//data/2.5/weather";
const API_Key = "a0aa1835ad226c19cac60d47d4a68757"
export const Api = async (query)=>{
       const {data} = await axios.get(URL,{
              params:{
                     q:query,
                     units: "metric",
                     APPID: API_Key
              }
       })
       return data
}