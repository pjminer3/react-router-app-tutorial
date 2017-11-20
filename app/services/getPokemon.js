import request from 'axios';

const getPokemon = {
  withAbility: (ability) => {
    const baseUrl = 'http://pokeapi.co/api/v2/ability';
    return request.get(`${baseUrl}/${ability}`)
    // axios requests always return promises
  }
}

export default getPokemon;