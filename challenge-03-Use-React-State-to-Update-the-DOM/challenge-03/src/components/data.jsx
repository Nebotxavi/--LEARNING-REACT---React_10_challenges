import React, { Component } from "react";

class Data extends Component {
  render() {
    const { name, age } = this.props.info;

    return (
      <React.Fragment>
        <div>
          <h2 className="subtitle is-4">Update Data from an input</h2>
        </div>
        <div className="input-display">
          <p>Display Name: {name} </p>
          <p>Display Age: {age} </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Data;
