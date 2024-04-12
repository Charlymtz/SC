import React, { useState } from 'react';

function ShoeCard({ id, name, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div id={id} className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-price">${price}</p>
        <div className="card-actions">
          <button
            className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
            onClick={toggleFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={isFavorite ? 'red' : 'currentColor'}
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;
