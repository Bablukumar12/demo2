import React from 'react';

const Favorites = ({ favorites, onRemove }) => {
  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <div>No favorites found.</div>;
  }

  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorites" >
        {favorites.map((fav, index) => (
          <img onClick={() => onRemove(index)} key={`favorite-${index}`} src={fav} alt={`favorite-${index}`} style={{ width: '40px' }} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
