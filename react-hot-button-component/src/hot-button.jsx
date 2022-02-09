import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 })
  }

  getBtnClass() {
    const { clicks } = this.state;
    if (clicks < 4) return 'cold';
    if (clicks < 7) return 'cool';
    if (clicks < 10) return 'tepid';
    if (clicks < 13) return 'warm';
    if (clicks < 16) return 'hot';
    return 'nuclear';
  }

  render() {
    return (
      <button onClick={this.handleClick} className={`hot-button ${this.getBtnClass()}`}>
        Hot Button
      </button>
    )
  }
}

export default HotButton;
