import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

let count = 0;

const template = (
  <div>
    <h1>Count: {count}</h1>
    <button>Add One</button>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
