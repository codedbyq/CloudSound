import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { song_id: this.props.songId, body: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({ body: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createComment(this.state)
        this.setState({ body: '' });
    }
    render() {
        return (
            <form className='comment-form' onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.body} 
                    placeholder='Write a comment'
                    onChange={this.handleInput} />
            </form>
        )
    }
}
