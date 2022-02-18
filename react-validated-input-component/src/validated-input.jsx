import React from 'react';

class Validation  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            icon: 'delete',
            errorMessage: 'A password is required'
        };

        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnKeyPress(event) {
        console.log('event ', event.key)
        this.setState({password: this.state.password + event.key});
        if (this.state.password.length < 7) {
            this.setState({errorMessage: 'Your password is too short'});
        } else {
            this.setState({errorMessage: ''});
            this.setState({icon: 'approved'})
        }
    }

    handleSubmit(event) {
        console.log('state: ', this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div class = 'main'> 
                <form onSubmit={this.handleSubmit}>
                <div>
                Password    
                </div>
                <div>
                <label>  
                    <input type="password" value={this.state.password} onKeyPress={this.handleOnKeyPress} />
                    <img  className='icon' src={`images/${this.state.icon}.png`} /> 
                </label>                
                </div>
                <div className='error-message'>
                {this.state.errorMessage}
                </div>
                {/* <input type="submit" value="submit"/> */}
                </form>            
            </div>
        );
    }
  }

export default Validation ;