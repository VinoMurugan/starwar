const BASE_URL = 'https://swapi.dev/api';

export async function getAllStarships() {
  try {
    const response = await fetch(`${BASE_URL}/starships/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results; // Assuming the API response contains a 'results' array
  } catch (error) {
    console.error('Error fetching starships:', error);
    throw error;
  }
}
