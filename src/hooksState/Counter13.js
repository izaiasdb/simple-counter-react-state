import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(localStorage);
  if (storage && storage !== "undefined") return JSON.parse(storage).count;
  return { count: 0 };
};

const storeStateInLocalStorage = count => {
  localStorage.setItem('counterState', JSON.stringify({ count }));
  console.log(localStorage);
};

// exec console do browser
// localStorage.clear()
const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    console.log(localStorage);
    if (storage && storage !== "undefined") return JSON.parse(storage)[value];
    return initialState;  
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const Counter = ({ max, step }) => {
  //const [count, setCount] = React.useState(getStateFromLocalStorage());
  const [count, setCount] = useLocalStorage(0, 'count');

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
    //storeStateInLocalStorage(count); // Pode ser também
  }, [count]);

  useEffect(() => {
    storeStateInLocalStorage(count);
  }, [count]);  

  return (
    <main className="Counter">
      <p>Aula 12</p>
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
