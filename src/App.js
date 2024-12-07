import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState(""); // To hold the user input
  const [result, setResult] = useState(null); // To store the calculation result

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Use eval to calculate the result (for simplicity)
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
      setResult(null); // Clear result
    } else {
      setInput(input + value); // Append value to input
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result !== null ? `= ${result}` : ""}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleClick("C")} className="clear">
          C
        </button>
      </div>
    </div>
  );
};

export default App;
