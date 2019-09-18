import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTSearch from "youtube-api-search";
import "./App.css";

const API_KEY = "AIzaSyBVpZdysPfGWP4ehepgtRGHc5nQwwnpkVk";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("surfboards");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log("vide0",videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar onTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <div className="absolute">
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            video={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
