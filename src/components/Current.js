import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Current(props) {
  const {
    placeName,
    dayHour,
    temperature,
    precip,
    humidity,
    wind,
    comment,
    img,
  } = props;

  const fourInfos = [
    [temperature, " °C", "fa-solid fa-temperature-high"],
    [precip, "", "fa-solid fa-cloud-showers-heavy"],
    [humidity, "", "fa-solid fa-droplet"],
    [wind, " km/h", "fa-solid fa-wind"],
  ];

  return (
    <div className="current-box">
          <div className="big-icon desktop desk-style">
          <img src={img} alt="currentImgIcon" />
        </div>
      <div className="big-box">
        <div className="big-icon mobile">
          <img src={img} alt="currentImgIcon" />
        </div>
        <div className="big-text">
          <p>{dayHour}</p>
          <h2>{placeName}</h2>
          <p>{comment}</p>

          <div className="info-box desk-style-info desktop">
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
      </div>
      <div className="info-box mobile">
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
