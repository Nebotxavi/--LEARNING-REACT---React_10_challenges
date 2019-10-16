import React, { Component } from "react";

class Info extends Component {
  render() {
    const { name, location, foodType, age, likes } = this.props.user;
    const twitterLink = `https://twitter.com/${this.props.user.twitterUsername}`;

    return (
      <div className="user-deets">
        <h3>
          <a href={twitterLink}>{name}</a>
        </h3>
        <p>
          <strong>Location</strong>
          {location}
        </p>
        <p>
          <strong>Eats</strong>
          {foodType}
        </p>
        <p>
          <strong>Age</strong>
          {age}
        </p>
        <p>
          <strong>Likes</strong>
          {likes}
        </p>
        <p>
          <strong>Twitter</strong>
          <a href={twitterLink}>@{this.props.user.twitterUsername}</a>
        </p>
      </div>
    );
  }
}

export default Info;
