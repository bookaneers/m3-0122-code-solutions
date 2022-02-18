import React from 'react';

class NewsletterForm  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({email: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('state: ', this.state);
      event.preventDefault();
    }
  
    render() {
      return (
        <div class = 'main'> 
            <form onSubmit={this.handleSubmit}>
            <label>
                Email:
                <input type="text" value={this.state.email} onChange={this.handleChange} />
            </label>
            <button type="submit" value="Submit">Submit</button>
            </form>            
        </div>
      );
    }
  }

export default NewsletterForm ;