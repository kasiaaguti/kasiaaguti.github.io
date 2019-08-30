import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN



class Map extends React.Component {
  constructor() {
    super()
    this.markers = []
  }


  // applying custom style to the map
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v10',
      center: this.props.center,
      zoom: 1.5
    })
       this.map.scrollZoom.disable()
    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.markers.map(point => {
      // create custom popups one for each marker
      const el = document.createElement('div')
      el.className = 'marker'





      // console.log(point)
      return new mapboxgl.Marker(el)
        .setLngLat({ lat: point.coordinates[0], lng: point.coordinates[1] })
        .addTo(this.map)


                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML(`
                    <div>
                      <div>
                      <h3>${point.name}</h3>

                        <button><a href=${point.website} target="_blank" rel="noopener noreferrer">Go to the album</a> </button>

                      <div style="background-image: url('${point.photo}'); height: 100px; min-width: 150px; background-repeat: no-repeat; background-size: cover; background-position: center;"> </div>




                  `))
                .addTo(this.map)


    })
    this.map.addControl(new mapboxgl.NavigationControl())

  }


  render() {
    return (
            <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}




export default Map
