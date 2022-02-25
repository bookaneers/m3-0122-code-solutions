import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openId: 0
        };
        this.handleClickRight = this.handleClickRight.bind(this)
        this.handleClickLeft = this.handleClickLeft.bind(this)
    }

    handleClickRight() {
        if (this.state.openId === 4) {
            this.setState({openId: 0})
        } else {
            this.setState({openId: this.state.openId + 1})
        }
        console.log('this.state.openId : ', this.state.openId);
    }

    handleClickLeft() {
        if (this.state.openId === 0) {
            this.setState({openId: 4})
        } else {
            this.setState({openId: this.state.openId - 1})
        }
        console.log('this.state.openId : ', this.state.openId);
    }

    render() {

        console.log('STATE', this.state);
        console.log('PROPS', this.props);
        console.log('PROPS', this.props.items[0]);

        return (
            <div className='carousel'>
                <div className='iconsandarrows'>

                    <div className='leftarrow' onClick={() => this.handleClickLeft()}>
                        <i className='fas fa-angle-left' />
                    </div>
                    <div className='icons'>
                        <h3>{this.props.items[this.state.openId].url}</h3>
                    </div>
                    <div className='rightarrow' onClick={() => this.handleClickRight()}>
                        <i className='fas fa-angle-right' />
                    </div>

                </div>

                
                <div className='dots'>
                <i className="fas fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
                </div> 

            </div>

        );

    }
}

export default Carousel;