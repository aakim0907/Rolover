import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 12
};

class Map extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div className='google-map' ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(Map);
