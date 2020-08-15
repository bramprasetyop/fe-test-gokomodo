import { ADD_FETCHED_DATA_POKEMON_TYPE } from '../actions/types';

interface actionPokemonType {
  payload: {
    name: string,
    url:string
  }[],
  type: string
}

export default function pokemonsReducer(state = [], action: actionPokemonType) {
    switch (action.type) {
    case ADD_FETCHED_DATA_POKEMON_TYPE:
      return [ ...action.payload]
    default:
      return state
  }
}