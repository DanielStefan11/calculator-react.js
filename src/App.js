import React, { useState, useEffect } from 'react';
// Components
import Output from './components/output/Output';
import Button from './components/button/Button';
import ResetButton from './components/resetButton/ResetButton';
// CSS
import './App.css';

const App = () => {
  const [input, setInput] = useState(() => '');

  const [buttonsPressed, setButtonsPressed] = useState(() => {
    console.log('App state');
    return {
      // operands
      key1: false,
      key2: false,
      key3: false,
      key4: false,
      key5: false,
      key6: false,
      key7: false,
      key8: false,
      key9: false,
      key0: false,
      // operators
      additionKey: false,
      subtractionKey: false,
      divisionKey: false,
      multiplicationKey: false,
      backspaceKey: false,
      leftParanthesisKey: false,
      rightParanthesisKey: false,
      dotKey: false,
      equalKey: false,
      resetKey: false,
    };
  });

  useEffect(() => {
    const listenerFunction = (event) => {
      const digitCode = event.key;
      let digit;

      switch (digitCode) {
        // Operands
        case '1':
          digit = 1;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key1: true };
          });
          break;
        case '2':
          digit = 2;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key2: true };
          });
          break;
        case '3':
          digit = 3;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key3: true };
          });
          break;
        case '4':
          digit = 4;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key4: true };
          });
          break;
        case '5':
          digit = 5;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key5: true };
          });
          break;
        case '6':
          digit = 6;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key6: true };
          });
          break;
        case '7':
          digit = 7;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key7: true };
          });
          break;
        case '8':
          digit = 8;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key8: true };
          });
          break;
        case '9':
          digit = 9;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key9: true };
          });
          break;
        case '0':
          digit = 0;
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key0: true };
          });
          break;

        // Operators
        case '+':
          digit = '+';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, additionKey: true };
          });

          break;
        case '-':
          digit = '-';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, subtractionKey: true };
          });
          break;
        case '/':
          digit = '/';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, divisionKey: true };
          });
          break;
        case '*':
          digit = '*';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, multiplicationKey: true };
          });
          break;
        case '=':
          calculate();
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, equalKey: true };
          });
          break;

        // Others
        case '.':
          digit = '.';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, dotKey: true };
          });
          break;
        case '(':
          digit = '(';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, leftParanthesisKey: true };
          });
          break;
        case ')':
          digit = ')';
          setInput((prevInput) => prevInput + digit);
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, rightParanthesisKey: true };
          });
          break;
        case ' ':
          reset();
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, resetKey: true };
          });
          break;
        case 'Backspace':
          backspace();
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, backspaceKey: true };
          });
          break;
      }
    };

    document.addEventListener('keydown', listenerFunction);

    return () => {
      document.removeEventListener('keydown', listenerFunction);
    };
  }, [input, buttonsPressed]);

  useEffect(() => {
    const listener = (event) => {
      const digitCode = event.key;

      switch (digitCode) {
        // operands
        case '1':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key1: false };
          });
          break;
        case '2':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key2: false };
          });
          break;
        case '3':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key3: false };
          });
          break;
        case '4':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key4: false };
          });
          break;
        case '5':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key5: false };
          });
          break;
        case '6':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key6: false };
          });
          break;
        case '7':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key7: false };
          });
          break;
        case '8':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key8: false };
          });
          break;
        case '9':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key9: false };
          });
          break;
        case '0':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, key0: false };
          });
          break;

        // operantors
        case '+':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, additionKey: false };
          });
          break;
        case '-':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, subtractionKey: false };
          });
          break;
        case '*':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, multiplicationKey: false };
          });
          break;
        case '/':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, divisionKey: false };
          });
          break;
        case '(':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, leftParanthesisKey: false };
          });
          break;
        case ')':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, rightParanthesisKey: false };
          });
          break;
        case 'Backspace':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, backspaceKey: false };
          });
          break;
        case '.':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, dotKey: false };
          });
          break;
        case '=':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, equalKey: false };
          });
          break;
        case ' ':
          setButtonsPressed((prevButtonsState) => {
            return { ...prevButtonsState, resetKey: false };
          });
          break;
      }
    };

    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, [buttonsPressed]);

  const addToInput = (value) => {
    setInput(input + value);
  };

  const backspace = () => {
    if (typeof input === 'string') {
      setInput(input.slice(0, -1));
    } else if (typeof input === 'number') {
      setInput(input.toString().slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      setInput(
        eval(input) === Infinity ? 'Can not be divided by 0' : eval(input)
      );
    } catch (e) {
      setInput('Error - click Reset');
    }
  };

  const reset = () => {
    setInput('');
  };

  console.log('APP', buttonsPressed);

  return (
    <div className='App'>
      <h1 className='calc-heading'>React Calculator</h1>
      <div className='calc-container'>
        <div className='row'>
          <Output>{input}</Output>
        </div>

        <div className='row'>
          <Button
            operatorButtons={buttonsPressed.leftParanthesisKey}
            handleClick={addToInput}
          >
            (
          </Button>
          <Button
            operatorButtons={buttonsPressed.backspaceKey}
            handleClick={backspace}
          >
            Backspace
          </Button>
          <Button
            operatorButtons={buttonsPressed.rightParanthesisKey}
            handleClick={addToInput}
          >
            )
          </Button>
        </div>
        <div className='row'>
          <Button operandButtons={buttonsPressed.key7} handleClick={addToInput}>
            7
          </Button>
          <Button operandButtons={buttonsPressed.key8} handleClick={addToInput}>
            8
          </Button>
          <Button operandButtons={buttonsPressed.key9} handleClick={addToInput}>
            9
          </Button>
          <Button
            operatorButtons={buttonsPressed.divisionKey}
            handleClick={addToInput}
          >
            /
          </Button>
        </div>

        <div className='row'>
          <Button operandButtons={buttonsPressed.key4} handleClick={addToInput}>
            4
          </Button>
          <Button operandButtons={buttonsPressed.key5} handleClick={addToInput}>
            5
          </Button>
          <Button operandButtons={buttonsPressed.key6} handleClick={addToInput}>
            6
          </Button>
          <Button
            operatorButtons={buttonsPressed.multiplicationKey}
            handleClick={addToInput}
          >
            *
          </Button>
        </div>

        <div className='row'>
          <Button operandButtons={buttonsPressed.key1} handleClick={addToInput}>
            1
          </Button>
          <Button operandButtons={buttonsPressed.key2} handleClick={addToInput}>
            2
          </Button>
          <Button operandButtons={buttonsPressed.key3} handleClick={addToInput}>
            3
          </Button>
          <Button
            operatorButtons={buttonsPressed.additionKey}
            handleClick={addToInput}
          >
            +
          </Button>
        </div>

        <div className='row'>
          <Button
            operatorButtons={buttonsPressed.dotKey}
            handleClick={addToInput}
          >
            .
          </Button>
          <Button operandButtons={buttonsPressed.key0} handleClick={addToInput}>
            0
          </Button>
          <Button
            resultButton={buttonsPressed.equalKey}
            handleClick={calculate}
          >
            =
          </Button>
          <Button
            operatorButtons={buttonsPressed.subtractionKey}
            handleClick={addToInput}
          >
            -
          </Button>
        </div>
        <div className='row'>
          <ResetButton
            resetButton={buttonsPressed.resetKey}
            handleReset={reset}
          >
            Reset
          </ResetButton>
        </div>
      </div>
      <div className='notes-container'>
        <h5 className='notes'>
          * If you use keyboard press SPACE key for Reset and BACKSPACE key for
          Backspace
        </h5>
      </div>
    </div>
  );
};

export default App;
