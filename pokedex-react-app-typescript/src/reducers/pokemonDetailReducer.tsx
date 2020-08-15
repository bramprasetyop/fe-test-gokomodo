import { GET_DETAIL_POKEMON } from '../actions/types';

interface pokemonDetailType {
  payload: {
    name: string,
    height: number,
    weight: number
  },
  type: string

}

export default function getDetailPokemonData(state = [], action: pokemonDetailType) {
    switch (action.type) {
    case GET_DETAIL_POKEMON:
      return { ...action.payload }
    default:
      return state
  }
}