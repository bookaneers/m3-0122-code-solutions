import React from 'react';

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'on'
    };
    console.log(this.state.button)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.button === 'on') {this.setState ({button: 'off'})}
    else {this.setState ({button: 'on'})}
  }

  render() {
    if (this.state.button === 'on') {
        return (
            <div className = {`lights ${this.state.button}`}>
                <button className={`switch-button ${this.state.button}`}>
                </button> 
                <button onClick={this.handleClick} className={`button-position ${this.state.button}`}></button>   
                ON    
            </div>
        )        
    }
    else {
        return (
            <div className = {`lights ${this.state.button}`}>
                <button className={`switch-button ${this.state.button}`}>
                </button> 
                <button onClick={this.handleClick} className={`button-position ${this.state.button}`}></button>    
                OFF   
            </div>
        ) 
    }
  }
}

export default SwitchButton;

