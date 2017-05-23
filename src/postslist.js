import React, { Component } from 'react';
import $ from 'jquery'; 

class PostsList extends Component {

  constructor(props) {
    super(props);

    this.state = {posts: []};
    this.postsEndpoint = 'https://api.instagram.com/v1/users/self/media/recent?access_token=845363967.79a2239.0dff38eee7304f4bbb6e62beb5dbf76e&count=-1&callback=?';
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    return $.getJSON(this.postsEndpoint)
            .then((data) => {
              this.setState({posts: data});
            });
  }

  render() {
    if (!this.state.posts.data) {
      return null;
    }

    return (
      <div className="testico">
        {this.state.posts.data.map((item, i) => {
          return <div key={i}> {item.images.low_resolution.url} </div>;
        })}
      </div>
    );
  }
}

export default PostsList;
