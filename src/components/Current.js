import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Current(props) {
  const { placeName, dayHour, temperature, precip, humidity, wind, comment } =
    props;

  const fourInfos = [
    [temperature, "°C", "fa-solid fa-temperature-high"],
    [precip, "", "fa-solid fa-cloud-showers-heavy" ],
    [humidity, "", "fa-solid fa-droplet"],
    [wind, " km/h", "fa-solid fa-wind"],
  ];
  

  return (
    <div className="current-box">
      <div className="icon-big-box" alt="icon-big"></div>
      <div className="info-box">
        <p>{dayHour}</p>
        <h2>{placeName}</h2>
        <p>{dayHour}</p>
        <p>{comment}</p>
        {fourInfos.map((info) => {
          return (
            <div className="four-icon-box">
              <div className="icon-text">
              <FontAwesomeIcon icon={info[2]} />
                <span>
                  {info[0]}
                  {info[1]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
