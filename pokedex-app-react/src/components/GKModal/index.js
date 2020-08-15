import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Grid } from '@material-ui/core';
import './styles.css'
import ImageError from '../../assets/image/image-error.png';

const mapStateToProps = state => {
  return {
    detailPokemon: state.detailPokemon,
  }
}

class GKModal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  modalBody() {
    const { detailPokemon, id } = this.props
    return (
      <div className="gk-modal" onClick={this.props.handleClose}>
        <Grid container spacing={1}>
          <Grid container item xs={5}>
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              onError={e => e.target.src = ImageError }
              alt=""
            />
          </Grid>
          <Grid container item xs={7}>
            <div>
              <h1>{detailPokemon.name}</h1>
              <p>Weight: {detailPokemon.weight}</p>
              <p>Height: {detailPokemon.height}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }

  render() {
    const { open, handleClose, id } = this.props
    return (
      <div>
        <Modal
          open={open}
          id={id}
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
