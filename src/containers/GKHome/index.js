import React from 'react'
import { connect } from 'react-redux'
import { getDetailPokemon, getDetailPokemonTypes } from '../../actions'
import './styles.css'
import { Grid, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import GKModal from '../../components/GKModal'
import GKCard from '../../components/GKCard'
import GKSearch from '../../components/GKSearch'

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    pokemonTypes: state.pokemonTypes
  }
}

class GKHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      pokemonId: 0,
      searchField: ''
    }
  }

  getParamId(str) {
    const url = str.split('/')
    var getParamId = url.filter(function (el) { return el !== '' })
    return Number(getParamId.slice(-1).join())
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value })
  }

  toggleModal(id) {
    this.setState({ modalOpen: true, pokemonId: id })
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  render() {
    const { modalOpen, pokemonId, searchField } =this.state
    const { pokemons, pokemonTypes } = this.props
    const filteredPokemon = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="gk-home">
        <div className="gk-home-headline">
          <h1>POKEMON</h1>
        </div>
        <Grid container spacing={2}>
          <Grid container item lg={3} md={3} xs={12}>
            <GKSearch 
              onSearchChange={(e) => this.onSearchChange(e)}
              searchField={searchField}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid container item xs={3}>
            <FormControl component="fieldset">
              <h2>Types</h2>
              <RadioGroup aria-label="types" name="pokemon_types" onChange={this.handleChange}>
                {
                  pokemonTypes.map((type, i) => {
                    const { name, url } = type
                    return (
                      <FormControlLabel onChange={() => this.props.dispatch(getDetailPokemonTypes(url))} key={i} value={url} control={<Radio />} label={name} />
                    )
                  })
                }
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid container item xs={9} spacing={2}>
            {
              filteredPokemon.length ?
              filteredPokemon.map((pokemon, i) => {
                const {name, url} = pokemon
                return (
                  <Grid item lg={3} md={6} xs={12} key={i} onClick={() => this.props.dispatch(getDetailPokemon(url))}>
                    <GKCard
                      toggleModal={() => this.toggleModal(this.getParamId(url))}
                      key={i}
                      id={this.getParamId(url)}
                      name={name}
                      />
                  </Grid>
                )
              }) : (
                <div className="gk-home--not-found">
                  <h1>Sorry! Not found</h1>
                </div>
              )
            }
            <GKModal 
              open={modalOpen}
              id={pokemonId}
              handleClose={() => this.handleClose() }
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(GKHome)