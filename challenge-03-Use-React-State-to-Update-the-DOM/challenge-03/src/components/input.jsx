import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="William"
            onChange={this.props.onChangeName}
          />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="38"
            onChange={this.props.onChangeAge}
          />
        </div>
      </div>
    );
  }
}

export default Input;
