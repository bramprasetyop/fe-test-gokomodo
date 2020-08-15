import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchDataPokemons, fetchDataPokemonType } from '../actions'

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchDataPokemons());
store.dispatch(fetchDataPokemonType());

export default store