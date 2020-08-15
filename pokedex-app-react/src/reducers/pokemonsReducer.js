import { ADD_FETCHED_DATA, ADD_FETCHED_DATA_POKEMON_TYPE_DETAIL } from '../actions/types';

export default function pokemonsReducer(state = [], action) {
    switch (action.type) {
    case ADD_FETCHED_DATA:
      return [ ...action.payload]
      case ADD_FETCHED_DATA_POKEMON_TYPE_DETAIL:
        return [ ...action.payload]
    default:
      return state
  }
}