import React from 'react';
import '../App.css';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
        <div className="card-content">
      <h2>{starship.name}</h2>
      {/* Add more details if needed */}
    </div>
    </div>
  );
}

export default StarshipCard;