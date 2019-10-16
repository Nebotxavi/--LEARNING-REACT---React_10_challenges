import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState();

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          onChange={e => setNum1(+e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          onChange={e => setNum2(+e.target.value)}
        />
      </div>

      <button onClick={e => setResult(num1 + num2)}>+</button>
      <button onClick={e => setResult(num1 - num2)}>-</button>
      <button onClick={e => setResult(num1 * num2)}>x</button>
      <button onClick={e => setResult(num1 / num2)}>/</button>

      <h2>{result}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
