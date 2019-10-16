import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.handleFetch = this.handleFetch.bind(this);
    this.state = {
      apiData: null
    };
  }

  handleFetch = () => {
    fetch("https://www.anapioficeandfire.com/api/books?pageSize=30")
      .then(response => response.json())
      .then(data => this.setState({ apiData: data }));
    console.log(this.state.apiData);
  };

  render() {
    return (
      <div className="App">
        <h1>Game of Thrones Books</h1>
        <h2>Fetch a list from an API and display it</h2>

        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={this.handleFetch}>
            Fetch Data
          </button>
          <br />
        </div>

        <div className="books">
          {this.state.apiData &&
            this.state.apiData.map((book, index) => {
              const authors = book.authors.join(", ");
              const date = new Date(book.released).toDateString();

              return (
                <div className="book" key={index}>
                  <h3>Book {index + 1}</h3>
                  <h2>{book.name}</h2>
                  <div className="details">
                    <p>👨: {authors}</p>
                    <p>📖: {book.numberOfPages} pages</p>
                    <p>🏘️: {book.country}</p>
                    <p>⏰: {date}</p>
                  </div>
                </div>
              );
            })}
        </div>

        <ScotchInfoBar seriesNumber="7" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
