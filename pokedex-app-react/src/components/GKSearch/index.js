import React, { Component } from 'react'
import { TextField } from '@material-ui/core';

export default class GKSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { onSearchChange, searchField } = this.props
    return (
      <TextField
        id="outlined-search"
        label="Search pokemon"
        type="search"
        variant="outlined"
        fullWidth
        onChange={onSearchChange}
        searchfield={searchField}
      />
    )
  }
}
