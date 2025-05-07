import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '300px' }}>
      <img 
        src={destination.image} 
        alt={destination.name} 
        style={{ width: '100%', borderRadius: '8px 8px 0 0' }}
      />
      <h2>{destination.name}</h2>
      <h4>{destination.location}</h4>
      <p>{destination.description}</p>
      <p><strong>{destination.price}</strong></p>
    </div>
  );
};

export default DestinationCard;