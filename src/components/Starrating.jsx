import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ rating, hoverRating, onRate, onHover }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {stars.map((star) => (
        <FaStar
          key={star}
          size={30}
          color={(hoverRating || rating) >= star ? '#ffc107' : '#e4e5e9'}
          onMouseEnter={() => onHover(star)}
          onMouseLeave={() => onHover(0)}
          onClick={() => onRate(star)}
          style={{ cursor: 'pointer', transition: 'color 0.2s' }}
        />
      ))}
    </div>
  );
}

export default StarRating;