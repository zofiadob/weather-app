import React from 'react'

export default function Cities(props) {

    const {
        citiesInfo,
    } = props;



  return (
      <div className='cities-box'>
          {citiesInfo.map( city => {
              return(
                  <div className='city' >{city[0]}</div>
              )
          })}
    </div>
  )
}
