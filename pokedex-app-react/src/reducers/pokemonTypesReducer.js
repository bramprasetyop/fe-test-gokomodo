import { ADD_FETCHED_DATA_POKEMON_TYPE } from '../actions/types';

export default function pokemonsReducer(state = [], action) {
    switch (action.type) {
    case ADD_FETCHED_DATA_POKEMON_TYPE:
      return [ ...action.payload]
    default:
      return state
  }
}