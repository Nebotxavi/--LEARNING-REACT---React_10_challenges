import React, { Component } from "react";
import users from "../users-data";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-deets">
          <h2>Loop Over an Array of Data</h2>
        </div>

        <div className="users">
          {users.map((user, index) => (
            <div key={index}>
              <p>{user.name}</p>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
