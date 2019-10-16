import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";
import Data from "./components/data";
import Input from "./components/input";

class App extends Component {
  constructor() {
    super();
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.state = {
      age: "",
      name: ""
    };
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleAge(event) {
    const ageValue = event.target.value;
    if (ageValue >= 0) {
      this.setState({
        age: ageValue
      });
    } else {
      this.setState({
        age: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <ScotchInfoBar seriesNumber="3" />
        <Data info={this.state} />
        <Input onChangeAge={this.handleAge} onChangeName={this.handleName} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
