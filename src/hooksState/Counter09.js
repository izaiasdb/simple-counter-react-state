import React, { Component } from 'react';

// const inc = c => c + 1;

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);
  // const increment = () => setCount(count + 1);
  // const increment = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   console.log('Before', count);
  // } 
  // const increment = () => {
  //   setCount(c => c + 1);    
  // }   
  // const increment = () => {
  //   setCount(inc);    
  // }   
  // const increment = () => {
  //   setCount(c => c + 1);    
  //   setCount(c => c + 1);    
  //   setCount(c => c + 1);    
  // }     

  const increment = () => {
    setCount(c => {
      if (count >= max) return c;
      return c + step;  
    });
  }

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <main className="Counter">
      <p>Refactoring & Hooks</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
}

export default Counter;
