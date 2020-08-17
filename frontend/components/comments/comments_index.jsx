// import React, { Component } from 'react'
// import { formatDate, formatTime } from '../../util/util'
// import { Link } from 'react-router-dom';

// export default class CommentsIndex extends Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.props.fetchComments(this.props.match.params.songId);
//     }

//     fetchUsername(id) {
//         if (this.props.users[id]) {
//             return this.props.users[id].username;
//         } else {
//             return this.props.fetchUser(id).username;
//         }
//     }

//     render() {
//         const comments = this.props.comments ? this.props.comments.map(comment => (
//             <div key={`comment-${comment.id}`} className='comment-item'>
//                 <div className='comment-header'>
//                     <Link to={`/users/${comment.user_id}`}>{this.fetchUsername(comment.user_id)}</Link>
//                     <span>{formatDate(comment.created_at)}</span>
//                 </div>
//                 <p className='comment-body'>{comment.body}</p>
//             </div>
//         )) : 'No Comments'
//         return (
//             <div className='comments-index'>
//                 <span className='comment-index-header'>
//                     <img src="https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/icons8-comments-30.png" />
//                     {`${comments.length} comments`}
//                 </span>
//                 {comments}
//             </div>
//         )
//     }
// }


import React, { useEffect } from 'react'
import { formatDate, formatTime } from '../../util/util'
import { Link } from 'react-router-dom';

export default function CommentsIndex(props) {

    useEffect(() => props.fetchComments(props.match.params.songId))

    const fetchUsername = id => {
        if (props.users[id]) {
            return props.users[id].username;
        } else {
            return props.fetchUser(id).username;
        }
    }

    const comments = props.comments ? props.comments.map(comment => (
        <div key={`comment-${comment.id}`} className='comment-item'>
            <div className='comment-header'>
                <Link to={`/users/${comment.user_id}`}>{fetchUsername(comment.user_id)}</Link>
                <span>{formatDate(comment.created_at)}</span>
            </div>
            <p className='comment-body'>{comment.body}</p>
        </div>
    )) : 'No Comments';
    
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

