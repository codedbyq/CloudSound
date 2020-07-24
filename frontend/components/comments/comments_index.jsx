import React, { Component } from 'react'

export default class CommentsIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.songId);
    }

    render() {
        const comments = this.props.comments ? this.props.comments.map(comment => (
            <div className='comment-item'>
                <span>{comment.user_id}</span>
                <p>{comment.body}</p>
            </div>
        )) : 'No Comments'
        return (
            <div>
                {comments}
            </div>
        )
    }
}

