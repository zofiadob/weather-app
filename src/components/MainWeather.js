import React, { useEffect, useState } from "react";
import axios from "axios";
import Current from "./Current";
import NextDays from "./NextDays";
import { citiesInfo } from "./citiesInfo";
import { weatherCodes } from "./weather-code";
import HamCloseIcon from "./HamCloseIcon";

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

  useEffect(() => {
    axios.get(url).then((response) => {
      const currentCon = response.data.hourly;
      setDayHour(
        currentCon.time[hour].substring(0, 10) +
          " - " +
          currentCon.time[hour].substring(11, 16)
      );
      setTemperature(currentCon.temperature_2m[hour]);
      setPrecip(currentCon.precipitation[hour]);
      setHumidity(currentCon.relativehumidity_2m[hour]);
      setWind(currentCon.windspeed_80m[hour]);
      setComment(weatherCodes[response.data.current_weather.weathercode].desc);
      setImg(weatherCodes[response.data.current_weather.weathercode].pic);

      const nextDays = response.data.daily;
      setNextDay1Name(currentTime.getDay() + 1);
      setNextDay1img(weatherCodes[nextDays.weathercode[1]].pic);
      setNextDay2Name(currentTime.getDay() + 2);
      setNextDay2img(weatherCodes[nextDays.weathercode[2]].pic);
      setNextDay3Name(currentTime.getDay() + 3);
      setNextDay3img(weatherCodes[nextDays.weathercode[3]].pic);
      setNextDay4Name(currentTime.getDay() + 4);
      setNextDay4img(weatherCodes[nextDays.weathercode[4]].pic);
      setNextDay5Name(currentTime.getDay() + 5);
      setNextDay5img(weatherCodes[nextDays.weathercode[5]].pic);
    });
  }, [url]);

  const nextDaysList = [
    [nextDay1Name, nextDay1img],
    [nextDay2Name, nextDay2img],
    [nextDay3Name, nextDay3img],
    [nextDay4Name, nextDay4img],
    [nextDay5Name, nextDay5img],
  ];

  return (
    <>
      <nav>
        <HamCloseIcon />
      </nav>
      <div className="mobile-back"></div>
      <main>
        <h1>Weather-app</h1>
        <div className="cities-box">
          {citiesInfo.map((city) => {
            return (
              <button
                className="city"
                onClick={() => {
                  setUrl(city[1]);
                  setPlaceName(city[0]);
                }}
              >
                {city[0]}
              </button>
            );
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
          img={img}
        />
        <NextDays nextDaysList={nextDaysList} />
      </main>
    </>
  );
}
