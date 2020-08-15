import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { getDetailPokemonTypes } from '../../actions/index'

interface GKSidebarPorps {
  pokemonTypes?: {
    name: string,
    url: string
  }[],
  dispatch?: (param: any) => any
}

const mapStateToProps = (state: any) => {
  return {
    pokemonTypes: state.pokemonTypes
  }
}

class GKSidebar extends Component<GKSidebarPorps> {
  render() {
    const { pokemonTypes } = this.props
    return (
      <React.Fragment>
        <Grid container item lg={3} md={3} sm={3}>
          <FormControl component="fieldset">
            <h2>Types</h2>
            <RadioGroup aria-label="types" name="pokemon_types" /* onChange={this.handleChange} */>
              {
                pokemonTypes ? pokemonTypes.map((type, i) => {
                  const { name, url } = type
                  return (
                    <FormControlLabel onChange={() => this.props.dispatch ? this.props.dispatch(getDetailPokemonTypes(url)) : {}} key={i} value={url} control={<Radio />} label={name} />
                  )
                }) : []
              }
            </RadioGroup>
          </FormControl>
        </Grid>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, null)(GKSidebar)
