import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import logo from './logo.svg';
import './travelmap.css';

class Travelmap extends Component {
  render() {
    const position = [51.505, -0.09];
    const instagramEndpoint = 'https://api.instagram.com/v1/users/self/media/recent?access_token=845363967.79a2239.0dff38eee7304f4bbb6e62beb5dbf76e&count=-1&callback=?';
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </Map>
    );
  }
}

export default Travelmap;
