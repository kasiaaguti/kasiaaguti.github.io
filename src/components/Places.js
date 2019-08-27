import React from 'react'
import axios from 'axios'

import Map from './Map'


class Places extends React.Component {
  constructor() {
    super()

    this.state = { points: null }
    this.mapCenter = { lat: 51.515, lng: -0.078 }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { coordinates } = this.mapCenter
    this.getBikePoints(coordinates)
  }

  getBikePoints(coordinates) {
      axios.get('components/chicago-parks.geojson', {
      params: { coordinates }
    })
      .then(res => this.setState({ points: res.data.coordinates }))
      .catch(err => console.log(err))
      console.log(this.state.points)

  }

  handleClick({ points: { coordinates}}) {
    this.getBikePoints(coordinates )
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
