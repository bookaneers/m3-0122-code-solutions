import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      image: 'play'

    };
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleClickWatch = this.handleClickWatch.bind(this);
  }

  counting() {
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  stopCounting() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  handleClickIcon() {
    if (this.state.image === 'play') {
      this.setState({ image: 'pause' });
      this.counting();

    } else {
      this.setState({ image: 'play' });
      this.stopCounting();
    }
  }

  handleClickWatch() {
    if (this.state.image === 'play') {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
            <div className='wall'>
                <button onClick={this.handleClickWatch} className='watch'> {this.state.count} </button>
                <img onClick={this.handleClickIcon} className='icon' src={`images/${this.state.image}.png`} />
            </div>
    );
  }
}

export default Stopwatch;
