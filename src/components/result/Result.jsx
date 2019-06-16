import React from 'react';

const Result = (props) => {

    const{date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather

    let content= null;

    if(!err && city){
        const sunriseTime = new Date(sunrise*1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset*1000).toLocaleTimeString()
        
        content = (
            <div className='row'>
                <div className='col col-12 col-md-6 mycolumn1'>
                    <p className='city'>City: <strong>{city}</strong></p>
                    <p>Date and time: {date}</p>
                </div>
                <div className='row line'></div>
                <div className='col col-12 col-md-6 mycolumn2'>
                    <p>Temperature: <strong>{temp} &#176;C</strong></p>
                    <p>Sunrise: <strong>{sunriseTime}</strong></p>
                    <p>Sunset: <strong>{sunsetTime}</strong></p>
                    <p>Pressure: <strong>{pressure} hPa</strong></p>
                    <p>Wind velocity: <strong>{wind} m/s</strong></p>
                </div>
            </div>
        )
    }

    return (
        <>
            {err ? `There is no such a city in the database: ${city}` : content}
        </>
    )
}
 
export default Result;