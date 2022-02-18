
import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton(props) {
     return (
       <button> {this.props.text} </button>;
     )
};

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
