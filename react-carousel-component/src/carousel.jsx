import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openId: 0
    };
    // this.handleClickRight = this.handleClickRight.bind(this);
    // this.handleClickLeft = this.handleClickLeft.bind(this);
    this.counting();
  }

  counting() {
    this.timerID = setInterval(
      () => this.tick(), 3000);
  }

  tick() {
    if (this.state.openId === 4) {
      this.setState({ openId: 0 });
    } else {
      this.setState({ openId: this.state.openId + 1 });
    }
  }

  handleClickRight() {
    if (this.state.openId === 4) {
      this.setState({ openId: 0 });
    } else {
      this.setState({ openId: this.state.openId + 1 });
    }
  }

  handleClickLeft() {
    if (this.state.openId === 0) {
      this.setState({ openId: 4 });
    } else {
      this.setState({ openId: this.state.openId - 1 });
    }
  }

  getDots() {
    return (
      <div className='dots'>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
      </div>
    );
  }

  render() {
    return (
      <div className='carousel'>
          <div className='iconsandarrows'>
              <div className='leftarrow' onClick={() => this.handleClickLeft()}>
                  <i className='fas fa-angle-left' />
              </div>
              <div className='icons'>
                  <img src = {this.props.items[this.state.openId].url} />
              </div>
              <div className='rightarrow' onClick={() => this.handleClickRight()}>
                  <i className='fas fa-angle-right' />
              </div>
          </div>

          { this.getDots()}
      </div>
    );
  }
}

export default Carousel;
