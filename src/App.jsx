import React, { useState } from 'react';
import StarRating from './components/Starrating';

function App() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // For hover effect

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rate this product:</h1>
      <StarRating 
        rating={rating}
        hoverRating={hoverRating}
        onRate={(newRating) => setRating(newRating)}
        onHover={(hoveredRating) => setHoverRating(hoveredRating)}
      />
      <p>Current rating: {rating} {rating === 1 ? 'star' : 'stars'}</p>
    </div>
  );
}

export default App;