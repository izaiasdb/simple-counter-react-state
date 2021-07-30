import React from 'react';
import { render } from 'react-dom';

import Counter from './classBasedState/Counter04';

import './styles.scss';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
