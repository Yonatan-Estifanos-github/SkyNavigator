// sky-navigator/src/components/Map.js
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
      {/* Render the map and satellites here */}
      {satellites.map((satellite) => (
        <div key={satellite.id}>
          <p>{satellite.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Map;
