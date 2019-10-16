import React, { Component } from "react";

const Photo = ({ photo }) => {
  return (
    <div className="user-deets">
      <img src={photo} alt=""></img>
    </div>
  );
};

export default Photo;
