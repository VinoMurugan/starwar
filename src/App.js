import React, { useState, useEffect } from 'react';
import { getAllStarships } from './service/Swapi';
import StarshipCard from './components/StarshipCard';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships()
      .then((starshipsData) => {
        setStarships(starshipsData);
      })
      .catch((error) => {
        console.error('Error fetching starships:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;
