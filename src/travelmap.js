import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import $ from 'jquery'; 
import './travelmap.css';
import token from './superSecretToken.js';

class Travelmap extends Component {

  constructor(props) {
    super(props);

    this.state = {posts: [], markers: []};
    this.posts = [];
    this.addedPosts = [];
    this.postsEndpoint = token();
  }

  getPosts(endpoint) {
    return $.getJSON(endpoint)
            .then((data) => {
              data.data.forEach((el, i) => {
                this.posts.push(el);
              });

              if (data.pagination.next_url) {
                this.getPosts(`${data.pagination.next_url}&callback=?`);
              }
            }).then(() => {
              this.setState({posts: this.posts});
            });
  }

  buildMarkers() {
    this.state.posts.map((item, i) => {
        if (item.location && !this.isIdInArray(this.addedPosts, item.id)) {
          const popupContent = <div><h3>{item.location.name}</h3><h4>{this.getFormattedDate(item.created_time)}</h4><img src={item.images.thumbnail.url} alt={item.location.name}/></div>
          let popup = <Popup>{popupContent}</Popup>;
          this.state.markers.push(<Marker position={[item.location.latitude, item.location.longitude]} key={item.id}>{popup}</Marker>);
          this.addedPosts.push(item.id);
        }
        return null;
    });
  }

  isIdInArray(array, id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === id) {
        return true;
      }
    }
    return false;
  }

  getFormattedDate(timestamp) {
    let date = new Date(timestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  componentDidMount() {
    this.getPosts(this.postsEndpoint);
  }

  render() {
    const position = [48.1351, 11.5820]; // Munich

    if (this.state.posts.length < 1) {
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
