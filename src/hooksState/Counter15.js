import React, { useState, useEffect } from 'react';


// Próxima aula
const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);
  const countRef = React.useRef();

  let message = '';
  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';
  
  // {current: null }
  countRef.current = count;

  const increment = () => {
    setCount(c => c + 1);
  }

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count: ${count}`);      
    }, 3000);

    return () => clearInterval(id)
  }, [count]);

  return (
    <main className="Counter">
      <p>Aula 15 - useEffect & Cleanup</p>
      <p>{message}</p>
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
