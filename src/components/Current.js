import React from "react";

export default function Current(props) {
  const{ placeName,
         dayHour, 
         temperature, 
         precip, 
         humidity, 
         wind, 
         comment } = props;

  const fourInfos = [[temperature,'°C'], [precip,''], [humidity,''], [wind,' km/h']];

  return (
    <div className="current-box">
      <div className="icon-big-box" alt='icon-big'></div>
      <div className="info-box">
        <p>{dayHour}</p>
        <h2>{placeName}</h2>
        <p>{dayHour}</p>
        <p>{comment}</p>
        {fourInfos.map((info) => {
            return (
          <div className="four-icon-box">
            <div className="icon-text" >
              <img src="" alt='icon'></img>
              <span>{info[0]}{info[1]}</span>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}
