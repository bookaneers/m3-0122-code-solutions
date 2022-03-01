import React from 'react';

class Accordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openId: null
        }
    }

    handleClick(id) {
        if (id === this.state.openId) {
            this.setState({openId: null})
        } else {
            this.setState({ openId: id })   
        }
    }

    render() {
        const topicsElements = this.props.topics.map(topic => {
            return (
                <div key={topic.id} className='topic'>
                    <div className='topic-title' onClick={() => this.handleClick(topic.id)}>
                        <h3>{topic.title}</h3>
                    </div>
                {
                    topic.id === this.state.openId
                    ? (
                        <div className='topic-content'>
                        {topic.content}
                        </div>
                    )
                    : null
                }
                </div>
            );
        });

        return (
            <div className='container'>
                { topicsElements }
            </div>
        )
    }
}

export default Accordion;