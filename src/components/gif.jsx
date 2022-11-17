import React, { Component } from "react";

class Gif extends Component {

  handleClick = () => {
    if (this.props.setSelected) {
      this.props.setSelected(this.props.id)
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`
    return (
    <img className="gif" alt="gif" src={src} onClick={this.handleClick} />
    );
  }
}

export default Gif;
