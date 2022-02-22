import React from 'react';

class AppDrawer  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: 'on',
            modal: 'on'
        };
        this.handleClickMenu = this.handleClickMenu.bind(this);
    }

    handleClickMenu(event) {
        console.log('event ', event)
        if (this.state.menu === 'on') { 
            console.log('click OFF')
            this.setState({ menu: 'off' }); 
            this.setState({ modal: 'off' }); 
        } else { 
            console.log('click ON')
            this.setState({ menu: 'on' }); 
            this.setState({ modal: 'on' }); 
        }
    }

    render() {
        return (
            <div className='main'> 
                <div className={`modal ${this.state.modal}`}>
                    
                    <img class='menu' onClick={this.handleClickMenu} 
                    className={`menu ${this.state.menu}`} src='./images/menu.png'/> 
                                      
                </div>
                <img class='dragonfly'src='./images/dragonfly.png'/>  
            </div>
        );
    }
  }

export default AppDrawer ;