import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import $ from 'jquery'; 
import './travelmap.css';

class Travelmap extends Component {

  constructor(props) {
    super(props);

    this.state = {posts: [], markers: []};
    this.postsEndpoint = 'https://api.instagram.com/v1/users/self/media/recent?access_token=845363967.79a2239.0dff38eee7304f4bbb6e62beb5dbf76e&count=-1&callback=?';
  }

  getPosts() {
    return $.getJSON(this.postsEndpoint)
            .then((data) => {
              this.setState({posts: data});
            });
  }

  buildMarkers() {
    this.state.posts.data.map((item, i) => {
        if (item.location) {
          const popupContent = <div><h3>{item.location.name}</h3><h4>{this.getFormattedDate(item.created_time)}</h4><img src={item.images.thumbnail.url} alt={item.location.name}/></div>
          let popup = <Popup>{popupContent}</Popup>;
          this.state.markers.push(<Marker position={[item.location.latitude, item.location.longitude]} key={i}>{popup}</Marker>);
        }
        return null;
    });
  }

  getFormattedDate(timestamp) {
    let date = new Date(timestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const position = [48.1351, 11.5820]; // Munich

    if (!this.state.posts.data) {
      return <div> Loading... </div>;
    }

    this.buildMarkers();

    return (
      <div className="rootWrapper">
        <Map center={position} zoom={4} animate={true}>
          <TileLayer
            url='https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9pZ29ueiIsImEiOiJjajM0bmt4ZmowMG1pMnhwbGJ4emg0MWhoIn0.Sx4mLUym-gNMhshRqhZstw'
          />
          {this.state.markers}
        </Map>
      </div>
    );
  }
}

export default Travelmap;
