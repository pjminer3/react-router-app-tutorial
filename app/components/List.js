import React from 'react';

function List(props) {
  const { pokemon, location } = props;
  const { ability } = location.match.params;
  // What is going on here? I don't understand the above

  return (
    <div>
      <h3>{ ability }</h3>
      <ul>
        { pokemon.map(poke => {
          const { pokemon } = poke;
          return <li key={ pokemon.name }>{ pokemon.name }</li>
        })}
      </ul>
    </div>
  )
}

export default List;