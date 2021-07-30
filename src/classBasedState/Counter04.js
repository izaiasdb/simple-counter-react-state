import React, { Component } from 'react';

const increment = (state, props) => {
  const {max, step } = props
  if (state.count >= max) return;
  return { count: state.count + step };
}  

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);    
  }

  // increment() {
  //   this.setState(state => {
  //     return { count: state.count + 1 };
  //   });
  // }

  // increment() {
  //   this.setState(({ count }) => {
  //     return { count: count + 1 };
  //   });
  // }

  // increment() {
  //   this.setState((state, props) => {
  //     if (state.count >= 10) return;
  //     return { count: state.count + 1 };
  //   });
  // }

  // increment() {
  //   const {max, step } = this.props

  //   this.setState(state => {
  //     if (state.count >= max) return;
  //     return { count: state.count + step };
  //   });  
  // }  

  // increment() {
  //   this.setState((state, props) => {
  //     if (state.count >= this.props.max) return;
  //     return { count: state.count + this.props.step };
  //   });
  // }  

  increment() {
    this.setState(increment)
    // this.setState(increment)
    // this.setState(increment)
  }      
  
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  
  reset() {
    this.setState({ count: 0 });
  }  

  render() {
    const { count } = this.state;

    return (
      <main className="Counter">
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
