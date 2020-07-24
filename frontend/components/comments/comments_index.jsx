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
                <div className='comment-header'>
                    <span>{comment.user_id}</span>
                    <span>{comment.created_at}</span>
                </div>
                <p className='comment-body'>{comment.body}</p>
            </div>
        )) : 'No Comments'
        return (
            <div className='comments-index'>
                <span className='comment-index-header'>{`${comments.length} comments`}</span>
                {comments}
            </div>
        )
    }
}

