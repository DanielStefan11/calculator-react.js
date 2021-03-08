import React, { useState, useEffect } from "react";
// Components
import Output from "./components/output/Output";
import Button from "./components/button/Button";
import ResetButton from "./components/resetButton/ResetButton";
// CSS
import "./App.css";

const App = () => {
  const [input, setInput] = useState(() => "");

  useEffect(() => {
    const listenerFunction = (event) => {
      const digitCode = event.key;
      let digit;

      switch (digitCode) {
        // Operands
        case "1":
          digit = 1;
          setInput((prevInput) => prevInput + digit);
          console.log("1");
          break;
        case "2":
          digit = 2;
          setInput((prevInput) => prevInput + digit);
          console.log("2");
          break;
        case "3":
          digit = 3;
          setInput((prevInput) => prevInput + digit);
          console.log("3");
          break;
        case "4":
          digit = 4;
          setInput((prevInput) => prevInput + digit);
          console.log("4");
          break;
        case "5":
          digit = 5;
          setInput((prevInput) => prevInput + digit);
          console.log("5");
          break;
        case "6":
          digit = 6;
          setInput((prevInput) => prevInput + digit);
          console.log("6");
          break;
        case "7":
          digit = 7;
          setInput((prevInput) => prevInput + digit);
          console.log("7");
          break;
        case "8":
          digit = 8;
          setInput((prevInput) => prevInput + digit);
          console.log("8");
          break;
        case "9":
          digit = 9;
          setInput((prevInput) => prevInput + digit);
          console.log("9");
          break;
        case "0":
          digit = 0;
          setInput((prevInput) => prevInput + digit);
          console.log("0");
          break;

        // Operators
        case "+":
          digit = "+";
          setInput((prevInput) => prevInput + digit);
          console.log("+");
          break;
        case "-":
          digit = "-";
          setInput((prevInput) => prevInput + digit);
          console.log("-");
          break;
        case "/":
          digit = "/";
          setInput((prevInput) => prevInput + digit);
          console.log("/");
          break;
        case "*":
          digit = "*";
          setInput((prevInput) => prevInput + digit);
          console.log("*");
          break;
        case "=":
          calculate();
          console.log("calculate");
          break;

        // Others
        case ".":
          digit = ".";
          setInput((prevInput) => prevInput + digit);
          console.log(".");
          break;
        case "(":
          digit = "(";
          setInput((prevInput) => prevInput + digit);
          console.log("(");
          break;
        case ")":
          digit = ")";
          setInput((prevInput) => prevInput + digit);
          console.log(")");
          break;
        case " ":
          reset();
          console.log("reset");
          break;
        case "Backspace":
          backspace();
          console.log("backspace");
          break;
      }
    };

    document.addEventListener("keydown", listenerFunction);

    return () => {
      document.removeEventListener("keydown", listenerFunction);
      console.log('Removed Listener')
    };
  }, [input]);

  const addToInput = (value) => {
    setInput(input + value);
  };

  const backspace = () => {
    if (typeof input === "string") {
      setInput(input.slice(0, -1));
    } else if (typeof input === "number") {
      setInput(input.toString().slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      setInput(
        eval(input) === Infinity ? "Can not be divided by 0" : eval(input)
      );
    } catch (e) {
      setInput("Error - click Reset");
    }
  };

  const reset = () => {
    setInput("");
  };

  return (
    <div className="App">
      <h1 className="calc-heading">React Calculator</h1>
      <div className="calc-container">
        <div className="row">
          <Output>{input}</Output>
        </div>

        <div className="row">
          <Button handleClick={addToInput}>(</Button>
          <Button handleClick={backspace}>Backspace</Button>
          <Button handleClick={addToInput}>)</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>

        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>

        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>

        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={calculate}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ResetButton handleReset={reset}>Reset</ResetButton>
        </div>
      </div>
      <div className="notes-container">
        <h5 className="notes">
          * If you use keyboard press SPACE key for Reset and BACKSPACE key for
          Backspace
        </h5>
      </div>
    </div>
  );
};

export default App;
