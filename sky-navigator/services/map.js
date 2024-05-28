import React, { useEffect, useState } from 'react';
import { fetchSatellites } from '../services/api';

const Map = () => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    const getSatellites = async () => {
      try {
        const data = await fetchSatellites();
        setSatellites(data);
      } catch (error) {
        console.error('Error fetching satellites:', error);
      }
    };

    getSatellites();
  }, []);

  return (
    <div>
      <h1>Satellite Map</h1>
      {satellites.length > 0 ? (
        satellites.map((satellite) => (
          <div key={satellite.id}>
            <p>{satellite.name}</p>
            <p>Latitude: {satellite.latitude}</p>
            <p>Longitude: {satellite.longitude}</p>
          </div>
        ))
      ) : (
        <p>No satellite data available</p>
      )}
    </div>
  );
};

export default Map;
