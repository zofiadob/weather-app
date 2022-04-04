import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NextDays(props) {
  const { nextDaysList } = props;

  function chooseDay(num) {
    switch (num) {
      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      case 7:
        return "Sunday";
      default:
        return "Monday";
    }
  }

  return (
    <div className="next-days-box">
      {nextDaysList.map((day) => {
        return (
          <div className="small-box">
            <div>{chooseDay(day[0] % 7)}</div>
            <FontAwesomeIcon className="wea-pic-next" icon={day[1]} />
          </div>
        );
      })}
    </div>
  );
}
