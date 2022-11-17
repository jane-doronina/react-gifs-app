import React, { Component } from "react";

class Search extends Component {

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
    <div>
    <input type="search" className="form-control form-search"
      onChange={this.handleChange} />
    </div>
    );
  }
}

export default Search;
