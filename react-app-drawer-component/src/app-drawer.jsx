import React from 'react';

class AppDrawer  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: 'on',
            modal: 'off'
        };
        this.handleClickMenu = this.handleClickMenu.bind(this);
    }

    handleClickMenu(event) {
        // console.log('event ', event)
        if (this.state.menu === 'on') { 
            console.log('click OFF')
            this.setState({ menu: 'off' }); 
            this.setState({ modal: 'on' }); 
        } else { 
            console.log('click ON')
            this.setState({ menu: 'on' }); 
            this.setState({ modal: 'off' }); 
        }
    }

    render() {
        if (this.state.menu === 'on') {
            return (
                <div className='main'> 
                    <img class='dragonfly'src='./images/dragonfly.png'/> 
                    <div className={`menu ${this.state.menu}`}>
                        <img className='menuBtn' onClick={this.handleClickMenu} src='./images/menu.png'/> 
                    </div>    
                    <div className={`modal ${this.state.modal}`}>  
                    </div>
                </div>
            );
        } else {
            return (
                <div className='main' onClick={this.handleClickMenu}> 
                    <img class='dragonfly'src='./images/dragonfly.png'/> 
                    <div className={`menu ${this.state.menu}`}>
                        <h1>Menu</h1>
                        <h3>About Us</h3> 
                        <h3>Get Started</h3> 
                        <h3>Sign In</h3> 
                    </div>    
                    <div className={`modal ${this.state.modal}`}>  
                    </div>
                </div>
            );
        }
    }
}

export default AppDrawer ;