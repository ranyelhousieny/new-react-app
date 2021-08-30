import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

const user = {
  name: 'Rany ElHousieny',
};

const template = (
  <div>
    <h2>
      {' '}
      My Name is {user.name}
    </h2>

    {user.profile && (
      <h1>
        Please, visit my
        profile {user.profile}
      </h1>
    )}
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
