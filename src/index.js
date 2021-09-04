import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

let count = 0;

const template = (
  <div>
    <h1>Count: {count}</h1>
    <button
      onClick={() => {
        count++;
        console.log(
          'Clicked From Inside',
          count
        );
      }}>
      Click Me
    </button>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
