import React, { useState, useEffect } from "react";
// Components
import Output from "./components/output/Output";
import Button from "./components/button/Button";
import ResetButton from "./components/resetButton/ResetButton";
// CSS
import "./App.css";

const App = () => {
  const [input, setInput] = useState(() => "");



  const [pressed1, setPressed1] = useState(() => false);
  const [pressed2, setPressed2] = useState(() => false);
  const [pressed3, setPressed3] = useState(() => false);
  const [pressed4, setPressed4] = useState(() => false);
  const [pressed5, setPressed5] = useState(() => false);
  const [pressed6, setPressed6] = useState(() => false);
  const [pressed7, setPressed7] = useState(() => false);
  const [pressed8, setPressed8] = useState(() => false);
  const [pressed9, setPressed9] = useState(() => false);
  const [pressed0, setPressed0] = useState(() => false);

  // const [pressedAddition, setPressedAddition] = useState(() => false);
  // const [pressedSubtraction, setPressedSubtraction] = useState(() => false);
  // const [pressedDivision, setPressedDivision] = useState(() => false);
  // const [pressedMultiplication, setPressedMultiplication] = useState(
  //   () => false
  // );
  // const [pressedLeftParanthesis, setPressedLeftParanthesis] = useState(
  //   () => false
  // );
  // const [pressedRightParanthesis, setPressedRightParanthesis] = useState(
  //   () => false
  // );
  // const [pressedBackspace, setPressedBackspace] = useState(() => false);
  // const [pressedDot, setPressedDot] = useState(() => false);

  useEffect(() => {
    const listenerFunction = (event) => {
      const digitCode = event.key;
      let digit;

      switch (digitCode) {
        // Operands
        case "1":
          digit = 1;
          setInput((prevInput) => prevInput + digit);
          setPressed1(() => true);
          break;
        case "2":
          digit = 2;
          setInput((prevInput) => prevInput + digit);
          setPressed2(() => true);
          break;
        case "3":
          digit = 3;
          setInput((prevInput) => prevInput + digit);
          setPressed3(() => true);
          break;
        case "4":
          digit = 4;
          setInput((prevInput) => prevInput + digit);
          setPressed4(() => true);
          break;
        case "5":
          digit = 5;
          setInput((prevInput) => prevInput + digit);
          setPressed5(() => true);
          break;
        case "6":
          digit = 6;
          setInput((prevInput) => prevInput + digit);
          setPressed6(() => true);
          break;
        case "7":
          digit = 7;
          setInput((prevInput) => prevInput + digit);
          setPressed7(() => true);
          break;
        case "8":
          digit = 8;
          setInput((prevInput) => prevInput + digit);
          setPressed8(() => true);
          break;
        case "9":
          digit = 9;
          setInput((prevInput) => prevInput + digit);
          setPressed9(() => true);
          break;
        case "0":
          digit = 0;
          setInput((prevInput) => prevInput + digit);
          setPressed0(() => true);
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
    };
  }, [input]);

  useEffect(() => {
    const listener = (event) => {
      const digitCode = event.key;
      let digit;

      switch (digitCode) {
        // operands
        case "1":
          setPressed1(() => false);
          break;
        case "2":
          setPressed2(() => false);
        case "3":
          setPressed3(() => false);
        case "4":
          setPressed4(() => false);
        case "5":
          setPressed5(() => false);
        case "6":
          setPressed6(() => false);
        case "7":
          setPressed7(() => false);
        case "8":
          setPressed8(() => false);
        case "9":
          setPressed9(() => false);
        case "0":
          setPressed0(() => false);
      }
    };

    document.addEventListener("keyup", listener);

    return () => {
      document.removeEventListener("keyup", listener);
    };
  }, [
    pressed1,
    pressed2,
    pressed3,
    pressed4,
    pressed5,
    pressed6,
    pressed7,
    pressed8,
    pressed9,
    pressed0,
  ]);

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
          <Button pressed7={pressed7} handleClick={addToInput}>
            7
          </Button>
          <Button pressed8={pressed8} handleClick={addToInput}>
            8
          </Button>
          <Button pressed9={pressed9} handleClick={addToInput}>
            9
          </Button>
          <Button handleClick={addToInput}>/</Button>
        </div>

        <div className="row">
          <Button pressed4={pressed4} handleClick={addToInput}>
            4
          </Button>
          <Button pressed5={pressed5} handleClick={addToInput}>
            5
          </Button>
          <Button pressed6={pressed6} handleClick={addToInput}>
            6
          </Button>
          <Button handleClick={addToInput}>*</Button>
        </div>

        <div className="row">
          <Button pressed1={pressed1} handleClick={addToInput}>
            1
          </Button>
          <Button pressed2={pressed2} handleClick={addToInput}>
            2
          </Button>
          <Button pressed3={pressed3} handleClick={addToInput}>
            3
          </Button>
          <Button handleClick={addToInput}>+</Button>
        </div>

        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button pressed0={pressed0} handleClick={addToInput}>
            0
          </Button>
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
