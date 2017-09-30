/*
 * Base Google Map example
 */
import React, {Component} from 'react'
import GoogleMap from 'google-map-react';
import Marker from './Marker.js';

export default class Map extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyBTfDJCPl6EvA7flQs2L2Gx3IMwjUaACLU'}}
        center={{lat: 59.3471642, lng: 18.169641100000035}}
        zoom={11}>
        <Marker lat={59.3471642} lng={18.169641100000035} />
      </GoogleMap>
    );
  }
}
