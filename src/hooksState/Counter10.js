import React, { useState, useEffect } from 'react';

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(c => {
      if (count >= max) return c;
      return c + step;  
    });
  }

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`
  }, [count]);

  return (
    <main className="Counter">
      <p>useEffect & Dependencies</p>
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
