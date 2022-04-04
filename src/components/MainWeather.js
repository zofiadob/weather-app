import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Current from './Current';
import NextDays from './NextDays';
import { citiesInfo } from './citiesInfo';
import HamCloseIcon from './HamCloseIcon';

export default function MainWeather() {
    
    const [url, setUrl] = useState(citiesInfo[0][1]);
    const [placeName, setPlaceName] = useState(citiesInfo[0][0]);
    const [dayHour, setDayHour] = useState();
    const [temperature, setTemperature] = useState();
    const [precip, setPrecip] = useState();
    const [humidity, setHumidity] = useState();
    const [wind, setWind] = useState();
    const [comment, setComment] = useState();
    const [img, setImg] = useState();

    const currentTime = new Date();
    let hour = currentTime.getHours();
    console.log(hour)

    // const [nextDay1Name, setNextDay1Name] = useState();
    // const [nextDay1img, setNextDay1img] = useState();

    // const [nextDay2Name, setNextDay2Name] = useState();
    // const [nextDay2img, setNextDay2img] = useState();

    // const [nextDay3Name, setNextDay3Name] = useState();
    // const [nextDay3img, setNextDay3img] = useState();

    // const [nextDay4Name, setNextDay4Name] = useState();
    // const [nextDay4img, setNextDay4img] = useState();

    // const [nextDay5Name, setNextDay5Name] = useState();
    // const [nextDay5img, setNextDay5img] = useState();


    useEffect(() =>{
        axios.get(url)
        .then(response => {
            console.log(response.data.hourly);
            const currentCon = response.data.hourly;
            setPlaceName('Poznań');
            setDayHour(currentCon.time[hour].substring(0,10)+ ' - ' + currentCon.time[hour].substring(11,16));
            setTemperature(currentCon.temperature_2m[hour]);
            setPrecip(currentCon.precipitation[hour]);
            setHumidity(currentCon.relativehumidity_2m[hour]);
            setWind(currentCon.windspeed_80m[hour]);
            setComment(currentCon.comment);
            setImg(currentCon.iconURL);


            // const nextDays = response.data.next_days;
            // setNextDay1Name(nextDays[1].day);
            // setNextDay1img(nextDays[1].iconURL);
            // setNextDay2Name(nextDays[2].day);
            // setNextDay2img(nextDays[2].iconURL);
            // setNextDay3Name(nextDays[3].day);
            // setNextDay3img(nextDays[3].iconURL);
            // setNextDay4Name(nextDays[4].day);
            // setNextDay4img(nextDays[4].iconURL);
            // setNextDay5Name(nextDays[5].day);
            // setNextDay5img(nextDays[5].iconURL);
        })
    }, [url])

    // const nextDaysList = [[nextDay1Name,nextDay1img],
    //                       [nextDay2Name,nextDay2img],
    //                       [nextDay3Name,nextDay3img],
    //                       [nextDay4Name,nextDay4img],
    //                       [nextDay5Name,nextDay5img]]

                          
  return (
      <>
    <nav>
        <HamCloseIcon />
    </nav>
    <div className='mobile-back'></div>
    <main>
    <h1>Weather-app</h1>
    <div className='cities-box'>
          {citiesInfo.map( city => {
              return(
                  <button className='city' onClick={() => setUrl(city[1])}>{city[0]}</button>
              )
          })}
          </div>
    <Current 
        placeName={placeName}
        dayHour={dayHour}
        temperature={temperature}
        precip={precip}
        humidity={humidity}
        wind={wind}
        comment={comment}
        img={img} />
        {/* <NextDays nextDaysList={nextDaysList}/> */}
        </main>
        </>
  )
}
