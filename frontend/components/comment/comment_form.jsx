import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: '' }
    }

    handleInput(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div></div>
        )
    }
}

export default CommentForm;