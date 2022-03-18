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
            setNextDay1Name(nextDays[1].day);
            setNextDay1Comment(nextDays[1].comment);
            setNextDay2Name(nextDays[2].day);
            setNextDay2Comment(nextDays[2].comment);
            setNextDay3Name(nextDays[3].day);
            setNextDay3Comment(nextDays[3].comment);
            setNextDay4Name(nextDays[4].day);
            setNextDay4Comment(nextDays[4].comment);
            setNextDay5Name(nextDays[5].day);
            setNextDay5Comment(nextDays[5].comment);
        })
    }, [baseUrl])

  return (
    <div>{placeName} <br/>
    {dayHour} <br/>
    {temperature} <br/>
    {precip} <br/>
    {humidity} <br/>
    {wind} <br/><br/><br/>

    {nextDay1Name}<br />
    {nextDay1Comment}<br />
    {nextDay2Name}<br />
    {nextDay2Comment}<br />
    {nextDay3Name}<br />
    {nextDay3Comment}<br />
    {nextDay4Name}<br />
    {nextDay4Comment}<br />
    {nextDay5Name}<br />
    {nextDay5Comment}<br />
    
    
    </div>
  )
}
