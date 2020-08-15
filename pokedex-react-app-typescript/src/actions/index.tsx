import { ADD_FETCHED_DATA, GET_DETAIL_POKEMON, ADD_FETCHED_DATA_POKEMON_TYPE, ADD_FETCHED_DATA_POKEMON_TYPE_DETAIL } from './types';
import axios from 'axios';
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const apiUrlPokemonType = 'https://pokeapi.co/api/v2/type'

// FETCH URL SECTIONS

export const fetchDataPokemons = () => {
  return (dispatch : any) => {
    return axios.get(apiUrl)
    .then(({data}) => {
      return data.results
    })
    .then(data => {
      dispatch({
        type: ADD_FETCHED_DATA,
        payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}

export const fetchDataPokemonType = () => {
  return (dispatch: any) => {
    return axios.get(apiUrlPokemonType)
    .then(({data}) => {
      return data.results
    })
    .then(data => {
      dispatch({
        type: ADD_FETCHED_DATA_POKEMON_TYPE,
        payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}

export const getDetailPokemon = (url: string) => {
  return (dispatch: any) => {
    axios.get(url)
    .then(({data}) => {
      return data
    })
    .then(data => {
      dispatch({
          type: GET_DETAIL_POKEMON,
          payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}

interface pokemonObj {
  pokemon: {
    name: string,
    url: string
  }
}

export const getDetailPokemonTypes = (url: string) => {
  return (dispatch: any) => {
    axios.get(url)
    .then(({data}) => {
      const pokemons = data.pokemon
      return pokemons.map((el: pokemonObj) => el.pokemon)
    })
    .then(data => {
      dispatch({
          type: ADD_FETCHED_DATA_POKEMON_TYPE_DETAIL,
          payload: data
      })
    })
    .catch(error => {
      throw (error)
    })
  }
}