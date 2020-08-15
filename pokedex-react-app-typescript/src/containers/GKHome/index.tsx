import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import GKCard from '../../components/GKCard/index'
import GKModal from '../../components/GKModal/index'
import GKSidebar from '../../components/GKSidebar/index'
import GKSearch from '../../components/GKSearch/index'
import { getDetailPokemon } from '../../actions'
import './styles.scss'

const mapStateToProps = (state: any) => {
  return {
    pokemons: state.pokemons
  }
}

interface GKHomeState {
  showModal: boolean,
  pokemonId: number,
  searchField: string
}
interface GKHomePorps {
  pokemons?: {
    name: string,
    url: string
  }[],
  dispatch?: (param: any) => any
}

class GKHome extends Component<GKHomePorps, GKHomeState> {
  constructor(props: GKHomePorps) {
    super(props)
    this.state = {
      showModal: false,
      pokemonId: 0,
      searchField: ''
    }
  }

  getParamId(str: string) {
    const url = str.split('/')
    var getParamId = url.filter(function (el) { return el !== '' })
    return Number(getParamId.slice(-1).join())
  }

  toggleModal(id: number) {
    this.setState({
        showModal: true,
        pokemonId: id
      })
  }

  handleClose() {
    this.setState({
      showModal: false
    })
  }

  onSearchChange(event: any) {
    this.setState({ searchField: event })
  }
  render() {
    const { showModal, pokemonId, searchField } = this.state
    const { pokemons } = this.props

    const filteredPokemon = pokemons ? pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField ? searchField.toLowerCase() : '');
    }): []
    return (
      <div className="gk-home">
        <Grid container spacing={2} justify='center' alignItems='center'  className="gk-home-search">
          <Grid container item lg={8} md={8} xs={12}>
            <GKSearch 
              onSearchChange={(e: any) => this.onSearchChange(e.target.value)}
              searchField={searchField ? searchField: ''}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <GKSidebar />
          <Grid container item lg={9} md={9} sm={9} xs={12} spacing={2}>
            {
              filteredPokemon.length ?
              filteredPokemon.map((pokemon, i) => {
                const { name, url } = pokemon
                return (
                  <Grid item lg={3} md={6} xs={12} key={i}  onClick={() => this.props.dispatch ? this.props.dispatch(getDetailPokemon(url)): {}}  >
                    <GKCard
                      name={name}
                      id={this.getParamId(url)}
                      toggleModal={() => this.toggleModal(this.getParamId(url))}
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
              open={showModal}
              pokemonid={pokemonId}
              handleClose={this.handleClose.bind(this)}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(GKHome)
