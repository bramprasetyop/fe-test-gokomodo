import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';
import pokemonTypesReducer from './pokemonTypesReducer';
import getDetailPokemon from './pokemonDetailReducer';

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonTypes: pokemonTypesReducer,
  detailPokemon: getDetailPokemon
})