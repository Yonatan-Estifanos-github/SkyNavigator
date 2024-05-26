// sky-navigator/src/services/api.js

// Example API call function
export const fetchSatellites = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/satellites'); // Update the endpoint as needed
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
  