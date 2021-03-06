import React from 'react';
// Components
import Output from './components/output/Output';
import Button from './components/button/Button';
import ResetButton from './components/resetButton/ResetButton';
// CSS
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  addToInput = (value) => {
    this.setState({ input: this.state.input + value });
  };

  backspace = () => {
    if (typeof this.state.input === 'string') {
      this.setState({ input: this.state.input.slice(0, -1) });
    } else if (typeof this.state.input === 'number') {
      this.setState({ input: this.state.input.toString().slice(0, -1) });
    }
  };

  calculate = () => {
    try {
      this.setState({
        input:
          eval(this.state.input) === Infinity
            ? 'Can not be divided by 0'
            : eval(this.state.input),
      });
    } catch (e) {
      this.setState({ input: 'Error - click Reset' });
    }
  };

  reset = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='calc-heading'>React Calculator</h1>
        <div className='calc-container'>
          <div className='row'>
            <Output>{this.state.input}</Output>
          </div>

          <div className='row'>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.backspace}>Backspace</Button>
            <Button handleClick={this.addToInput}>)</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.calculate}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className='row'>
            <ResetButton handleReset={this.reset}>Reset</ResetButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
