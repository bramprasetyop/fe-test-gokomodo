import React, { Component } from 'react'
import './styles.scss'

type AppProps = {
  title: string
}

export default class GKHeader extends Component<AppProps> {
  render() {
    const { title } = this.props
    return (
      <div className="gk-headline">
        <h1> {title} </h1>
      </div>
    )
  }
}
