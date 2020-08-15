import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

interface GKSearchProps {
  onSearchChange(param: any): any,
  searchField?: any
}

const CssTextField = withStyles({
  root: {
    '& input': {
      color: 'white'
    },
    '& label': {
      color: 'red'
    },
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red'
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      }
    },
  },
})(TextField);

class GKSearch extends Component<GKSearchProps> {
  constructor(props: GKSearchProps) {
    super(props)
    this.state = {}
  }
  render() {
    const { onSearchChange, searchField } = this.props
    return (
      <CssTextField
        label="Search Pokemon"
        variant="outlined"
        id="custom-css-outlined-input"
        fullWidth
        type="search"
        onChange={onSearchChange}
        value={searchField}
      />
    )
  }
}
export default GKSearch
