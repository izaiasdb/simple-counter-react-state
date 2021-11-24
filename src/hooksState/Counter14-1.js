import React, { Component } from 'react';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   if (storage && storage !== "undefined") 
//   return JSON.parse(storage);
//   return { count: 0 };
// };

// const storeStateInLocalStorage = (state) => {
//   localStorage.setItem('counterState', JSON.stringify(state));
//   console.log(localStorage);
// };

// document.title = "Hello!";

class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    })); 
  }

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1
    })); 
  }  

  reset = () => {
    this.setState(() => ({
      count: 0
    })); 
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(`Count: ${this.state.count}`);
    }, 3000);
  }

  render() {
    const { count } = this.state;

    return (
      <main className="Counter">
        <p>Persisting state & useRef-p1</p>
        <p className="count">{count}</p>        
        <section className="controls">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        </section>
      </main>
    );
  }
}

export default Counter;
