import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Current from './Current';
import NextDays from './NextDays';

export default function MainWeather() {
    let baseUrl = 'https://weatherdbi.herokuapp.com/data/weather/poznan'
    const [placeName, setPlaceName] = useState();
    const [dayHour, setDayHour] = useState();
    const [temperature, setTemperature] = useState();
    const [precip, setPrecip] = useState();
    const [humidity, setHumidity] = useState();
    const [wind, setWind] = useState();
    const [comment, setComment] = useState();

    const [nextDay1Name, setNextDay1Name] = useState();
    const [nextDay1img, setNextDay1img] = useState();

    const [nextDay2Name, setNextDay2Name] = useState();
    const [nextDay2img, setNextDay2img] = useState();

    const [nextDay3Name, setNextDay3Name] = useState();
    const [nextDay3img, setNextDay3img] = useState();

    const [nextDay4Name, setNextDay4Name] = useState();
    const [nextDay4img, setNextDay4img] = useState();

    const [nextDay5Name, setNextDay5Name] = useState();
    const [nextDay5img, setNextDay5img] = useState();


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
            setComment(currentCon.comment);

            const nextDays = response.data.next_days;
            setNextDay1Name(nextDays[1].day);
            setNextDay1img(nextDays[1].iconURL);
            setNextDay2Name(nextDays[2].day);
            setNextDay2img(nextDays[2].comment);
            setNextDay3Name(nextDays[3].day);
            setNextDay3img(nextDays[3].comment);
            setNextDay4Name(nextDays[4].day);
            setNextDay4img(nextDays[4].comment);
            setNextDay5Name(nextDays[5].day);
            setNextDay5img(nextDays[5].comment);
        })
    }, [baseUrl])

    const nextDaysList = [[nextDay1Name,nextDay1img],
                          [nextDay2Name,nextDay2img],
                          [nextDay3Name,nextDay3img],
                          [nextDay4Name,nextDay4img],
                          [nextDay5Name,nextDay5img]]

  return (
    <main>
    <h1>Weather-app</h1>
    <Current 
        placeName={placeName}
        dayHour={dayHour}
        temperature={temperature}
        precip={precip}
        humidity={humidity}
        wind={wind}
        comment={comment}/>
        <NextDays nextDaysList={nextDaysList}/>
        </main>
  )
}
