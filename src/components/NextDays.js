import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NextDays(props) {
    const {
        nextDaysList
    } = props;

  return (
    <div className='next-days-box'>
        {nextDaysList.map(day => {
            return(
                <div className='small-box'>
                    <div>{day[0]}</div>
                    <FontAwesomeIcon className='wea-pic-next' icon={day[1]} />
                </div>
            );
        })}
    </div>
  )
}
