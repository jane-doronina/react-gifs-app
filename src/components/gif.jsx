import React, { Component } from "react";

class Gif extends Component {

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`
    return (
    <img className="gif" alt="gif" src={src} />
    );
  }
}

export default Gif;
