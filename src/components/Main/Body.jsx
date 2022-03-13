import React, { useState } from 'react';
import classes from './Body.module.css'
import Card from './Card'

  const Body = (props) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className="Body">
      
      <div className={classes.body}>
        <div id='main-text'>
        <Card>
          <br />
          <h1>현재 당신의 위치는 ?</h1>
          <button id='btn' onClick={getLocation}>Get Location</button>
          <p>{status}</p>
          <br />
          {lat && <p>위도: {lat}</p>}
          {lng && <p>경도: {lng}</p>}
        </Card>
        </div>
        <br />
      </div>

    </div>
  );
}

export default Body;