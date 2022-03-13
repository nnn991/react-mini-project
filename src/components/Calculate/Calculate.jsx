import React from 'react'
import styles from './Calculate.module.css'

const Calculate = () => {

// 거리 계산
    function computeDistance(startCoords, destCoords) {
        let startLatRads = degreesToRadians(startCoords.latitude);
        let startLongRads = degreesToRadians(startCoords.longitude);
        let destLatRads = degreesToRadians(destCoords.latitude);
        let destLongRads = degreesToRadians(destCoords.longitude);

        let Radius = 6371;
        let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                        Math.cos(startLatRads) * Math.cos(destLatRads) *
                        Math.cos(startLongRads - destLongRads)) * Radius;

        return distance;
    }

    function degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    const startCoords = {
        latitude: 123,
        longitude: 23
    }

    const destCoords = {
        latitude: 103,
        longitude: 43
    }
    console.log(startCoords.latitude);
    console.log(computeDistance(startCoords, destCoords));
    
    const calculatedValue = computeDistance(startCoords, destCoords);

  return (
    <div id='calval' className={styles.cal}>{calculatedValue.toFixed(3)}km</div>
  )
}

export default Calculate