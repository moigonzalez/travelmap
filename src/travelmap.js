import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import PostsList from './postslist';
import './travelmap.css';

class Travelmap extends Component {
  render() {
    const position = [51.505, -0.09];
    return (
      <div className="rootWrapper">
        <Map center={position} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </Map>
        <PostsList/>
      </div>
    );
  }
}

export default Travelmap;
