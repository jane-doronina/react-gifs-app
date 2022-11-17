import React, { Component } from "react";
import giphy from "giphy-api";
import './App.scss';
import Search from "./components/search"
import Gif from "./components/gif"
import GifList from "./components/gif_list"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "C2Bi5VxjfH40ZuT4BX"
    }

    this.search("homer thinking");
  }

  search = (query) => {
    giphy("R3OBKm4TejvmWaWEGwIH84Z00HWPw58m").search({
      q: query,
      rating: "g",
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  setSelected = (id) => {
    this.setState({selectedGifId: id});
  }

  render() {

    return (
      <div className="App">
        <div className="left-scene">
        <Search searchFunction={this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} setSelected={this.setSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
