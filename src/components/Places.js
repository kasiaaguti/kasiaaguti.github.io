import React from 'react'
import axios from 'axios'

import Map from './Map'
import data from './../data'


class Places extends React.Component {
  constructor() {
    super()

    this.state = { points: null }
    this.mapCenter = { lat: 0.515, lng: 60 }

  }

  componentDidMount() {
    const { coordinates } = this.mapCenter
    this.getPoints(coordinates)
  }

  getPoints(coordinates) {
      this.setState({points: data})
  }



  render() {
    if (!this.state.points) return null
    return (
      <Map
        markers={this.state.points}
        onClick={this.handleClick}
        center={this.mapCenter}
      />
    )
  }
}

export default Places
