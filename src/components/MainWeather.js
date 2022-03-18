import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MainWeather() {
    let baseUrl = 'https://weatherdbi.herokuapp.com/data/weather/poznan'
    const [placeName, setPlaceName] = useState();
    const [dayHour, setDayHour] = useState();
    const [temperature, setTemperature] = useState();
    const [precip, setPrecip] = useState();
    const [humidity, setHumidity] = useState();
    const [wind, setWind] = useState();

    const [nextDay1Name, setNextDay1Name] = useState();
    const [nextDay1Comment, setNextDay1Comment] = useState();

    const [nextDay2Name, setNextDay2Name] = useState();
    const [nextDay2Comment, setNextDay2Comment] = useState();

    const [nextDay3Name, setNextDay3Name] = useState();
    const [nextDay3Comment, setNextDay3Comment] = useState();

    const [nextDay4Name, setNextDay4Name] = useState();
    const [nextDay4Comment, setNextDay4Comment] = useState();

    const [nextDay5Name, setNextDay5Name] = useState();
    const [nextDay5Comment, setNextDay5Comment] = useState();


    useEffect(() =>{
        axios.get(baseUrl)
        .then(response => {
            const currentCon = response.data.currentConditions;
            setPlaceName(response.data.region);
            setDayHour(currentCon.dayhour);
            setTemperature(currentCon.temp.c);
            setPrecip(currentCon.precip);
            setHumidity(currentCon.humidity);
            setWind(currentCon.wind.km);

            const nextDays = response.data.next_days;
            setNextDay1Name(nextDays.day);
            setNextDay1Comment(nextDays.comment);
        })
    }, [baseUrl])

  return (
    <div>{placeName} <br/>
    {dayHour} <br/>
    {temperature} <br/>
    {precip} <br/>
    {humidity} <br/>
    {wind} <br/><br/><br/>


    
    
    </div>
  )
}
