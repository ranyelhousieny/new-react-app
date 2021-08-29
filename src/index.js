import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const user = {
  name: 'Rany ElHousieny',
  profile: 'https://rany.tk',
};

function website(site) {
  if (site) {
    return site;
  }
  return 'Not Available';
}
const template = (
  <div>
    <h1>
      Adding Sass to Webpack
    </h1>
    <h2>
      {' '}
      My Name is {user.name}
    </h2>
    <p>
      Please, visit my profile
      at{' '}
      {website(user.profile)}
    </p>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
