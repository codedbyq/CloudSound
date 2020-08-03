import React, { Component } from 'react'

export default class CommentsIndex extends Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.songId);
    }

    formatDate(date) {
        const today = new Date();
        const commentDate = new Date(date);
        const diff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(commentDate.getFullYear(), commentDate.getMonth(), commentDate.getDate())) / (1000 * 60 * 60 * 24));

        if (diff >= 365) {
            return `${Math.floor(diff / 365)} years ago`;
        } else if (diff >= 31) {
            return `${Math.floor(diff / 31)} months ago`;
        } else if (diff >= 7) {
            return `${Math.floor(diff / 7)} weeks ago`;
        } else if (diff > 0) {
            return `${diff} days ago`;
        } else {
            return this.formatTime(today, commentDate);
        }
    }

    formatTime(date1, date2) {
        const diff = date1.getMinutes() - date2.getMinutes();

        if (diff >= 60) {
            return `${Math.floor(diff / 60)} hours ago`;
        } else {
            return `${diff} minutes ago`;
        }
    }

    render() {
        const comments = this.props.comments ? this.props.comments.map(comment => (
            <div className='comment-item'>
                <div className='comment-header'>
                    <span>{comment.user_id}</span>
                    <span>{this.formatDate(comment.created_at)}</span>
                </div>
                <p className='comment-body'>{comment.body}</p>
            </div>
        )) : 'No Comments'
        return (
            <div className='comments-index'>
                <span className='comment-index-header'>
                    <img src="https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/icons8-comments-30.png" />
                    {`${comments.length} comments`}
                </span>
                {comments}
            </div>
        )
    }
}

