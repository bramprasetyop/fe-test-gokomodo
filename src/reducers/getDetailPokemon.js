import { GET_DETAIL_POKEMON } from '../actions/types';

export default function getDetailPokemonData(state = [], action) {
    switch (action.type) {
    case GET_DETAIL_POKEMON:
      return { ...action.payload }
    default:
      return state
  }
}