import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Create child Statcard component here
function StatCard(props) {
  console.log(props);
  return (
    <React.Fragment>
      {props.items.map((item, index) => {
        console.log(item);
        return (
          <div className="stat-card" key={index}>
            <div className="stat-line">
              <span>{item.icon}</span>
              <strong>{item.line}</strong>
            </div>
            <p>{item.content}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}

class App extends Component {
  state = {
    items: [
      { icon: "👉", line: "Points", content: 12543 },
      { icon: "🤙", line: "Shakas", content: 12 },
      { icon: "⚡", line: "Lightnings", content: 55879 },
      { icon: "💎", line: "Diamonds", content: 44 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h2>Use components and props in React</h2>
        <StatCard items={this.state.items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
