import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel'

const items = [
  {
      url: 'one'
  },
  {
      url: 'two'
  },
  {
      url: 'three'
  },
  {
      url: 'four'
  },
  {
      url: 'five'
  }
]

ReactDOM.render(
    <Carousel items={items} />,
    document.querySelector('#root')
);