import React from 'react';

const Card = ({ sprite, types, stats }) => {
  return (
    <div className='card'>
      <div className='card__img-container'>
        <img src={sprite} />
      </div>
      <div className='card__types-container'>
        {types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </div>
      <div className='card__stats-container'>
        {stats.map((pokemonStat, index) => (
          <li key={index}>
            {pokemonStat.stat.name}: {pokemonStat.base_stat}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Card;
