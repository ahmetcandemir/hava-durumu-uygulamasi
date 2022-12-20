import React, {useState} from "react"
import Wheather from './Wheatherresult.js';
import './App.css';
import { getDefaultNormalizer } from '@testing-library/react'


function App() {
  const APP_KEY = "8c57bb143297421981a10526221412"
  let cityinput=""
  const [wheatherdata, setwheatherdata]=useState([])
  function citytext()
  {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityinput = e.target.value;
      console.log(cityinput)
    })
  }
  async function getdata(value)
  {
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3`)
    const result = await data.json();
    //console.log(result)//
    setwheatherdata(result.forecast.forecastday)
    console.log(result.forecast.forecastday)
  }
  return (
    <div>
      <div className="arama">
        <input type="text" placeholder="Şehrinizi Girin" onChange={citytext}/>
        <button onClick={()=> getdata(cityinput)}>Arayın</button>
      </div>
        <center><h1>Tarih&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;Hava Durumu&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;Gündüz / Gece&nbsp;&nbsp;&nbsp;</h1></center>
        <hr />
       {wheatherdata.map(item=>(<Wheather key={item.date} date={item.date} mintemp={item.day.mintemp_c} 
       maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>))}
    </div>
  );
}

export default App;
