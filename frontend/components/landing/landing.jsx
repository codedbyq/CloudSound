import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>This is the landing</h3>
                <h5>Current User: {this.props.currentUser}</h5>
            </div>
        )
    }
}

export default Landing;