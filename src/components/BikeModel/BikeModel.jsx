import React from 'react';
import './BikeModel.css';

const BikeModel = ({ name, image }) => {
  const whatsappUrl = `https://wa.me/14417035053?text=${encodeURIComponent(
    `Hello, I would like to get a quote for ${name}`
  )}`;

  return (
    <div className="markplace_grid">
    <div className="bike-card">
      <div className="bike-image-container">
        <img src={image} alt={name} className="bike-image" />
      </div>
      <div className="bike-info">
        <h3 className="bike-name">{name}</h3>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="quote-btn"
        >
          Get Quote
        </a>
      </div>
    </div>
    </div>
  );
};

export default BikeModel;