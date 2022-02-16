import React from 'react';

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'on'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.button === 'on') { this.setState({ button: 'off' }); } else { this.setState({ button: 'on' }); }
  }

  render() {
    return (
        <div className = {`lights ${this.state.button}`}>
            <button className={`switch-button ${this.state.button}`}>
            </button>
            <button onClick={this.handleClick} className={`button-position ${this.state.button}`}></button>
            { this.state.button ? 'ON' : 'OFF' }
        </div>
    );
  }
}

export default SwitchButton;
