import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openId: 0
    };
    this.counting();
  }

  counting() {
    this.timerID = setInterval(
      () => this.tick(this.props), 3000);
  }

  tick(props) {
    if (this.state.openId === props.items.length - 1) {
      this.setState({ openId: 0 });
    } else {
      this.setState({ openId: this.state.openId + 1 });
    }
  }

  handleClickRight(props) {
    if (this.state.openId === props.items.length - 1) {
      this.setState({ openId: 0 });
    } else {
      this.setState({ openId: this.state.openId + 1 });
    }
  }

  handleClickLeft(props) {
    if (this.state.openId === 0) {
      this.setState({ openId: props.items.length - 1 });
    } else {
      this.setState({ openId: this.state.openId - 1 });
    }
  }

  getDots(props) {
    const items = props.items;

    const listOfDots = items.map(item => {
      if (item.id === this.state.openId + 1) {
        return <li key={item.id}> <i className="fas fa-circle"></i> </li>;
      } else {
        return <li key={item.id}> <i className="far fa-circle"></i> </li>;
      }
    }
    );
    return (
       <ul>{listOfDots}</ul>
    );
  }

  render() {
    return (
      <div className='carousel'>
          <div className='iconsandarrows'>
              <div className='leftarrow' onClick={() => this.handleClickLeft(this.props)}>
                  <i className='fas fa-angle-left' />
              </div>
              <div className='icons'>
                  <img src = {this.props.items[this.state.openId].url} />
              </div>
              <div className='rightarrow' onClick={() => this.handleClickRight(this.props)}>
                  <i className='fas fa-angle-right' />
              </div>
          </div>
          <div className = 'dots'>
            { this.getDots(this.props) }
          </div>
      </div>
    );
  }
}

export default Carousel;
