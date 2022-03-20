import React from 'react'

export default function NextDays(props) {
    const {
        nextDaysList
    } = props;

  return (
    <div className='next-days-box'>
        {nextDaysList.map(day => {
            return(
                <div className='small-box'>
                    <div className='day-name'>{day[0]}</div>
                    <img src={day[1]} alt='icon' />
                </div>
            );
        })}
    </div>
  )
}
