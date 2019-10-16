import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";
import Info from "./components/info";
import Photo from "./components/photo";

class App extends Component {
  state = {
    user: {
      name: "Chris on Code",
      location: "Las Vegas",
      foodType: "Everything",
      age: 28,
      likes: "Coding into the wee hours of the morning",
      twitterUsername: "chrisoncode",
      avatar:
        "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
    }
  };

  render() {
    return (
      <div className="App">
        <Photo photo={this.state.user.avatar} />
        <Info user={this.state.user} />
        <ScotchInfoBar />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
