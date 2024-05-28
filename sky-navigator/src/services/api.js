export const fetchSatellites = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/satellites');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
