import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Create child Statcard component here
function StatCard(props) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{props.icon}</span>
        <strong>{props.line}</strong>
      </div>
      <p>{props.content.toLocaleString()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      <StatCard icon="👉" line="Points" content={12543} />
      <StatCard icon="🤙" line="Shakas" content={12} />
      <StatCard icon="⚡" line="Lightnings" content={55879} />
      <StatCard icon="💎" line="Diamonds" content={44} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
