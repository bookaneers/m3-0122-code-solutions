import React from 'react';

class Watch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    // this.handleClick = this.handleClick.bind(this)
  }



  render() {
    return (
      <div className = 'wall'>
        <button className = 'watch'>
          <h1>{this.state.clicks}</h1>
        </button>
        <img class='icon' src='../dist/images/play.png'/>
      </div>
    )
  }
}

export default Watch;
