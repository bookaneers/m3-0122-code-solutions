import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h1', null, 'Hello, React!');
const container = document.querySelector('#root');

// eslint-disable-next-line no-console
console.log('Element:', element);

ReactDOM.render(
  element,
  container
);
