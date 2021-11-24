import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage && storage !== "undefined") 
  //if (storage) return JSON.parse(storage); 
  return JSON.parse(storage);
  return { count: 0 };
};

// function storeStateInLocalStorage () {
//   localStorage.setItem('counterState', JSON.stringify(this.state));
//   console.log(localStorage);
// };

const storeStateInLocalStorage = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  console.log(localStorage);
};

class Counter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 3,
    // };
    this.state = getStateFromLocalStorage()  
    console.log('start with:', this.state);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);    
  }

  // increment() {
  //   this.setState(
  //     (state, props) => {
  //       const {max, step } = props;
  //       if (state.count >= max) return;
  //       return { count: state.count + step };
  //     },
  //     () => {
  //       localStorage.setItem('counterState', JSON.stringify(this.state))
  //       console.log('After', this.state);
  //     }
  //   );  

  //   console.log('Before', this.state);
  // }

  // increment() {
  //   this.setState(
  //     (state, props) => {
  //       const {max, step } = props;
  //       if (state.count >= max) return;
  //       return { count: state.count + step };
  //     }, storeStateInLocalStorage.bind(this)); //function, sem arrow        
  //   console.log('Before', this.state);
  // }    

  increment() {
    this.setState(
      (state, props) => {
        const {max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
        // Não precisou do bind com o arrow  function
      }, () => storeStateInLocalStorage(this.state));        
    console.log('Before', this.state);
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
        <p>SetState & Callback</p>
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
