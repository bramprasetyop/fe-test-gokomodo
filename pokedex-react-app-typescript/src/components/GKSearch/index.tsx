import React, { Component } from 'react'
import { TextField } from '@material-ui/core';

interface GKSearchProps {
  onSearchChange(param: any): any,
  searchField?: any
}

class GKSearch extends Component<GKSearchProps> {
  constructor(props: GKSearchProps) {
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
        value={searchField}
      />
    )
  }
}
export default GKSearch
