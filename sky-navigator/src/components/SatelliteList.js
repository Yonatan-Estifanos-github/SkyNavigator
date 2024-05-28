import React, { useEffect, useState } from 'react';
import { fetchSatellites } from '../services/api';

const SatelliteList = () => {
  const [satellites, setSatellites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSatellites = async () => {
      try {
        const data = await fetchSatellites();
        setSatellites(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getSatellites();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Satellite List</h1>
      <ul>
        {satellites.map((satellite) => (
          <li key={satellite.id}>
            {satellite.name}: Latitude {satellite.latitude}, Longitude {satellite.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SatelliteList;
