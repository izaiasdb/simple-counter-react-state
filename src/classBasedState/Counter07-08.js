import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage && storage !== "undefined") 
  return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  console.log(localStorage);
};

document.title = "Hello!";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = getStateFromLocalStorage()  
    console.log('start with:', this.state);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);   
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this) ;
  }

  updateDocumentTitle() {
    document.title = this.state.count;
  }

  // increment() {
  //   this.setState(
  //     (state, props) => {
  //       const {max, step } = props;
  //       if (state.count >= max) return;
  //       return { count: state.count + step };
  //       // Não precisou do bind com o arrow  function
  //     }, () => storeStateInLocalStorage(this.state));        
  //   console.log('Before', this.state);
  // }  

  // increment() {
  //   this.setState(
  //     (state, props) => {
  //       const {max, step } = props;
  //       if (state.count >= max) return;
  //       return { count: state.count + step };
  //       // Não precisou do bind com o arrow  function
  //     }, () =>{
  //       document.title = `Count: ${this.state.count}`;
  //     },
  //   ); 
  // }    
  
  increment() {
    this.setState(
      (state, props) => {
        const {max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
        // Não precisou do bind com o arrow  function
      }, this.updateDocumentTitle
    ); 
  }   

  // decrement() {
  //   this.setState({ count: this.state.count - 1 });
  // }

  decrement() {
    this.setState({ count: this.state.count - 1 }, this.updateDocumentTitle);
  }  
  
  // reset() {
  //   this.setState({ count: 0 });
  // }  
  reset() {
    this.setState({ count: 0 }, this.updateDocumentTitle);
  }    

  render() {
    const { count } = this.state;

    return (
      <main className="Counter">
        <p>SetState & Helper Funtion</p>
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
