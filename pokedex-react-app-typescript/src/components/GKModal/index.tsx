import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { Modal, Grid, Chip } from '@material-ui/core';
import './styles.scss'
import ImageError from '../../assets/image/image-error.png';


const mapStateToProps = (state: any) => {
  return {
    detailPokemon: state.detailPokemon,
  }
}
interface GKModalProps {
  pokemonid: number,
  handleClose(closeModal: boolean): void,
  open: boolean,
  detailPokemon?: {
    name?: string
    height?: number
    weight?: number,
    abilities?: {
      ability: {
        name: string
      }
    }[]
  }
}

class GKModal extends Component<GKModalProps> {
  constructor(props: GKModalProps) {
    super(props)
    this.state= {
      pokemonAbility: []
    }
  }

  modalBody() {
    const { detailPokemon, pokemonid } = this.props
    return (
      <div className="gk-modal" onClick={() => this.props.handleClose}>
        <Grid container spacing={2}>
          <Grid container item lg={5} md={5} sm={6} xs={12}>
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonid}.svg`}
              onError={(e: any) => e.target.src = ImageError }
              alt={detailPokemon ? detailPokemon.name : ''}
            />
          </Grid>
          <Grid container item lg={4} md={7} sm={6} xs={12}>
            <div>
              <h1>{detailPokemon ? detailPokemon.name : ''}</h1>
              <p>Weight: {detailPokemon ? detailPokemon.weight : ''} kg</p>
              <p>Height: {detailPokemon ? detailPokemon.height : ''} m</p>
              <p>Abilities:</p>
              <div className="gk-modal-chip">
                {
                  detailPokemon ?
                  detailPokemon.abilities ? 
                  detailPokemon.abilities.map((ability, i) => {
                    return (
                        <Chip
                          key={i}
                          label={ability.ability.name.split('-').join(' ')}
                          color="primary"
                        />
                    )
                  }) : '' : ''
                }
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }

  render() {
    const { open, handleClose } = this.props
    return (
      <div {...this.props.pokemonid}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {
            this.modalBody()
          }
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, null) (GKModal)
